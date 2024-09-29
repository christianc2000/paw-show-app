// store/sidebarStore.ts
import { create } from 'zustand';

interface State {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  toggleSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
}));
