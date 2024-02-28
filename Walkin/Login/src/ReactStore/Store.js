import { create } from "zustand";

import pubsub from "UtilityMFE/Pubsub";

export const useLoginStore = create((set) => ({
  isUserLoggedIn: false,
  userDetails: {},
  userLogin: (userDetails) =>
    set((state) => ({ isUserLoggedIn: true, userDetails })),
}));

export const publishLoginEvent = (userLoginDetails) => {
  pubsub.publish("USER_LOGIN", userLoginDetails);
};
