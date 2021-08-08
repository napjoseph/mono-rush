import { proxy } from 'valtio';

export interface HeaderFiltersStore {
  showProfilePicture: boolean;
  toggleProfilePicture: () => void;
}

export const headerFiltersStore = proxy<HeaderFiltersStore>({
  showProfilePicture: true,
  toggleProfilePicture: () => {
    headerFiltersStore.showProfilePicture = !headerFiltersStore.showProfilePicture;
  }
});
