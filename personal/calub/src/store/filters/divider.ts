import { proxy } from 'valtio';

export interface DividerFiltersStore {
  showSection: boolean;
  toggleSection: () => void;
}

export const dividerFiltersStore = proxy<DividerFiltersStore>({
  showSection: true,
  toggleSection: () => {
    dividerFiltersStore.showSection = !dividerFiltersStore.showSection;
  }
});
