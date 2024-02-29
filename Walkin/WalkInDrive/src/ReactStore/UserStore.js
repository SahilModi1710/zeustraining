import { create } from "zustand";

import pubsub from "UtilityMFE/Pubsub";

export const useUserStore = create((set) => ({
  isUserLoggedIn: false,
  userDetails: {},
  userLoginInfo: (isUserLoggedIn, userDetails) =>
    set((state) => ({
      isUserLoggedIn,
      userDetails,
    })),
}));

const udpateLocalStore = (user) => {
  const { userLoginInfo } = useUserStore.getState();
  const isUserLoggedIn = user.isUserLoggedIn;
  const userDetails = user.userDetails;
  userLoginInfo(isUserLoggedIn, userDetails);
};

const subscribeToLoginEvent = () => {
  // console.log("first");
  pubsub.subscribe("USER_LOGIN", udpateLocalStore);
};

subscribeToLoginEvent();
