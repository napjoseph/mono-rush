import { proxy } from 'valtio';

import { HeaderImage } from '../../models';

const addProfilePicture = (list: HeaderImage[], item: HeaderImage): HeaderImage[] => {
  return [...list, item];
};

export interface HeaderFiltersStore {
  showSection: boolean;
  toggleSection: () => void;

  showProfilePicture: boolean;
  toggleProfilePicture: () => void;

  profilePictures: HeaderImage[];
  addProfilePicture: (headerImage: HeaderImage) => void;

  selectedProfilePictureIndex: number;
  selectProfilePicture: (index: number) => void;

  isSelectProfilePicturesExpanded: boolean;
  toggleSelectProfilePicturesExpanded: () => void;

  useCircularImage: boolean;
  toggleUseCircularImage: () => void;

  addDropShadow: boolean;
  toggleAddDropShadow: () => void;
}

export const headerFiltersStore = proxy<HeaderFiltersStore>({
  showSection: true,
  toggleSection: () => {
    headerFiltersStore.showSection = !headerFiltersStore.showSection;
  },

  showProfilePicture: true,
  toggleProfilePicture: () => {
    headerFiltersStore.showProfilePicture = !headerFiltersStore.showProfilePicture;
  },

  profilePictures: [],
  addProfilePicture: (headerImage: HeaderImage) => {
    headerFiltersStore.profilePictures = addProfilePicture(
      headerFiltersStore.profilePictures,
      headerImage
    );
  },

  selectedProfilePictureIndex: 0,
  selectProfilePicture: (index: number) => {
    headerFiltersStore.selectedProfilePictureIndex =
      index >= 0 && index < headerFiltersStore.profilePictures.length ? index : 0;
  },

  isSelectProfilePicturesExpanded: false,
  toggleSelectProfilePicturesExpanded: () => {
    headerFiltersStore.isSelectProfilePicturesExpanded =
      !headerFiltersStore.isSelectProfilePicturesExpanded;
  },

  useCircularImage: false,
  toggleUseCircularImage: () => {
    headerFiltersStore.useCircularImage = !headerFiltersStore.useCircularImage;
  },

  addDropShadow: false,
  toggleAddDropShadow: () => {
    headerFiltersStore.addDropShadow = !headerFiltersStore.addDropShadow;
  }
});
