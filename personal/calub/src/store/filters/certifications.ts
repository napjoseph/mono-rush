import { proxy } from 'valtio';

export interface CertificationsFiltersStore {
  showSection: boolean;
  toggleSection: () => void;
}

export const certificationsFiltersStore = proxy<CertificationsFiltersStore>({
  showSection: true,
  toggleSection: () => {
    certificationsFiltersStore.showSection = !certificationsFiltersStore.showSection;
  }
});
