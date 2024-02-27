import { create } from "zustand";

export const useDriveStore = create((set) => {
  const storedDrives = JSON.parse(localStorage.getItem("drives")) || [];
  const storedApplyDrive = JSON.parse(localStorage.getItem("applyDrive")) || {};

  return {
    drives: storedDrives,
    applyDrive: storedApplyDrive,

    fetchDrives: (drives) => {
      set({ drives });
      localStorage.setItem("drives", JSON.stringify(drives));
    },

    setApplyDrive: (applyDrive) => {
      set({ applyDrive });
      localStorage.setItem("applyDrive", JSON.stringify(applyDrive));
    },
  };
});
