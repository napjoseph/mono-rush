import { proxy } from 'valtio';

export interface SkillsFiltersStore {
  showSection: boolean;
  toggleSection: () => void;

  showTotalUsage: boolean;
  toggleShowTotalUsage: () => void;

  showFamiliarity: boolean;
  toggleShowFamiliarity: () => void;

  useProgressBar: boolean;
  toggleUseProgressBar: () => void;
}

export const skillsFiltersStore = proxy<SkillsFiltersStore>({
  showSection: true,
  toggleSection: () => {
    skillsFiltersStore.showSection = !skillsFiltersStore.showSection;
  },

  showTotalUsage: true,
  toggleShowTotalUsage: () => {
    skillsFiltersStore.showTotalUsage = !skillsFiltersStore.showTotalUsage;
  },

  showFamiliarity: false,
  toggleShowFamiliarity: () => {
    skillsFiltersStore.showFamiliarity = !skillsFiltersStore.showFamiliarity;
  },

  useProgressBar: false,
  toggleUseProgressBar: () => {
    skillsFiltersStore.useProgressBar = !skillsFiltersStore.useProgressBar;
  }
});
