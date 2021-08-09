import { proxy } from 'valtio';

export interface EventsFiltersStore {
  showSection: boolean;
  toggleSection: () => void;
}

export const eventsFiltersStore = proxy<EventsFiltersStore>({
  showSection: true,
  toggleSection: () => {
    eventsFiltersStore.showSection = !eventsFiltersStore.showSection;
  }
});
