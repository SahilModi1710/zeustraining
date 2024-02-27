import json
from http import HTTPStatus

from .Handlers.AllWalkinDrives import all_walk_in_drives
from .Handlers.DriveDetailsById import drive_details_by_id
from .Handlers.Login import login
from .Handlers.ApplyToDrive import apply_to_drive
from .Handlers.CreateUser import create_user


def handle_graphql(event, context):
    print("hello")
    event = json.loads(event["body"])
    print("hello2")
    # print(event)
    data = []
    if type(event) == list:
        for each_event in event:
            data.append(handle_each_request(each_event))
    else:
        data = handle_each_request(event)

    return data


def handle_each_request(event):
    field_name = event["info"]["fieldName"]
    # event_source = event["source"]
    event_arguments = event["arguments"]

    data = []

    if field_name == "AllWalkInDrives":
        data = all_walk_in_drives()

    elif field_name == "DriveDetailsByID":
        data = drive_details_by_id(event_arguments["guid"])

    elif field_name == "Login":
        data = login(event_arguments["input"])

    elif field_name == "ApplyToDrive":
        data = apply_to_drive(event_arguments["input"])

        return data

    elif field_name == "CreateUser":
        # data = create_user(event)
        print(event_arguments)

    return build_response(HTTPStatus.OK, data)


def build_response(status_code, body):
    return {
        "statusCode": status_code,
        "body": json.dumps(body),
        "headers": {"Content-Type": "application/json"},
    }
