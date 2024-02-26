import { create } from "zustand";

export const useDriveStore = create((set) => {
  const storedDrives = JSON.parse(localStorage.getItem("drives")) || [];

  return {
    drives: storedDrives,

    fetchDrives: (drives) => {
      set(() => {
        localStorage.setItem("drives", JSON.stringify(drives));
        return { drives };
      });
    },
  };
});
