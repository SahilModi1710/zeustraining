import { create } from "zustand";

export const useRegisterStore = create((set) => ({
  userDetails: {},
  userRegister: (newUserDetails) => {
    set((state) => ({
      userDetails: { ...state.userDetails, ...newUserDetails },
    }));
  },
}));
