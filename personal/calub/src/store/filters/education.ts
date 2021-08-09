import { proxy } from 'valtio';

export interface EducationFiltersStore {
  showSection: boolean;
  toggleSection: () => void;
}

export const educationFiltersStore = proxy<EducationFiltersStore>({
  showSection: true,
  toggleSection: () => {
    educationFiltersStore.showSection = !educationFiltersStore.showSection;
  }
});
