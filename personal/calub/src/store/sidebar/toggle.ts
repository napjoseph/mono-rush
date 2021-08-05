import { proxy } from 'valtio';

export interface SidebarToggleStore {
  show: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;

  // This creates a side-effect that opens the sidebar once per session.
  isFirstToggleFinished: boolean;
  firstToggle: () => void;
}

export const sidebarToggleStore = proxy<SidebarToggleStore>({
  show: false,
  toggle: () => {
    sidebarToggleStore.show = !sidebarToggleStore.show;
  },
  open: () => {
    sidebarToggleStore.show = true;
  },
  close: () => {
    sidebarToggleStore.show = false;
  },
  isFirstToggleFinished: false,
  firstToggle: () => {
    if (sidebarToggleStore.isFirstToggleFinished) return;
    sidebarToggleStore.open();
    sidebarToggleStore.isFirstToggleFinished = true;
  }
});
