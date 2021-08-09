import { proxy } from 'valtio';

export interface OrganizationsFiltersStore {
  showSection: boolean;
  toggleSection: () => void;
}

export const organizationsFiltersStore = proxy<OrganizationsFiltersStore>({
  showSection: true,
  toggleSection: () => {
    organizationsFiltersStore.showSection = !organizationsFiltersStore.showSection;
  }
});
