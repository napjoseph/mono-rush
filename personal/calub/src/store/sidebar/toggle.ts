import { proxy } from 'valtio';

export interface SidebarToggleStore {
  show: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const sidebarToggleStore = proxy<SidebarToggleStore>({
  show: true,
  toggle: () => {
    sidebarToggleStore.show = !sidebarToggleStore.show;
  },
  open: () => {
    sidebarToggleStore.show = true;
  },
  close: () => {
    sidebarToggleStore.show = false;
  }
});
