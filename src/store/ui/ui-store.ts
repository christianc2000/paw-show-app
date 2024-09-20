// store/sidebarStore.ts
import { create } from "zustand";

interface State {
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
//   closeSideMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
//   closeSideMenu: () => set({ isSideMenuOpen: false }),
}));
