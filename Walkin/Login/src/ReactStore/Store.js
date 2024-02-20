import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isUserLoggedIn: false,
  userDetails: {},
  userLogin: (userDetails) =>
    set((state) => ({ isUserLoggedIn: true, userDetails })),
  userLogout: () =>
    set((state) => ({ isUserLoggedIn: false, userDetails: {} })),
}));
