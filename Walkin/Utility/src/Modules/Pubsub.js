import { v4 as uuid, validate as uuidValidate } from "uuid";
// console.log("0");
let instance;
// console.log(instance);
// console.log("1");

class PubSub {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }
    instance = this;
    // console.log("constructor start");
    // console.log(instance);
    this.persistedEventsMessages = {};
    this.subscriberCallbacks = {};
    this.subscriberEvents = {};
    this.events = {};
    // console.log("constructor over");
    // console.log(instance);
  }

  subscribe(event, callback) {
    console.log("inside subscribe");
    console.log(instance);
    if (typeof event !== "string") throw new Error("Topic must be a string.");
    if (typeof callback !== "function")
      throw new Error("onMessage must be a function.");

    const subID = uuid();
    if (!(event in this.events)) {
      this.events[event] = [];
    }
    this.events[event].push(subID);

    this.subscriberCallbacks[subID] = callback;
    this.subscriberEvents[subID] = event;

    if (event in this.persistedEventsMessages) {
      this.persistedEventsMessages[event].forEach((data) => {
        callback(data);
      });
    }

    return subID;
  }

  publish(event, data) {
    // console.log(instance);
    if (typeof event !== "string") throw new Error("Topic must be a string.");
    if (typeof data !== "object") throw new Error("Message must be an object.");

    if (!(event in this.persistedEventsMessages)) {
      this.persistedEventsMessages[event] = [];
    }
    this.persistedEventsMessages[event].push(data);

    if (event in this.events) {
      const subIDs = this.events[event];
      subIDs.forEach((id) => {
        if (id in this.subscriberCallbacks) {
          this.subscriberCallbacks[id](data);
        }
      });
    }
  }

  unsubscribe(subID) {
    if (typeof subID !== "string" || !uuidValidate(id))
      throw new Error("ID must be a valid UUID.");

    if (subID in this.subscriberCallbacks && subID in this.subscriberEvents) {
      delete this.subscriberCallbacks[subID];
      const event = this.subscriberEvents[subID];
      if (event && event in this.events) {
        this.events[event] = this.events[event].filter((id) => id !== subID);
        if (this.events[event].length === 0) {
          delete this.events[event];
        }
      }
      delete this.subscriberTopics[id];
    }
  }
}

const pubSub = Object.freeze(new PubSub());
export default pubSub;
