import { proxy } from 'valtio';

export interface CharacterReferencesFiltersStore {
  showSection: boolean;
  toggleSection: () => void;
}

export const characterReferencesFiltersStore = proxy<CharacterReferencesFiltersStore>({
  showSection: true,
  toggleSection: () => {
    characterReferencesFiltersStore.showSection = !characterReferencesFiltersStore.showSection;
  }
});
