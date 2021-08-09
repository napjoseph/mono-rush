import { proxy } from 'valtio';

export interface SkillsFiltersStore {
  showSection: boolean;
  toggleSection: () => void;

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

  showFamiliarity: true,
  toggleShowFamiliarity: () => {
    skillsFiltersStore.showFamiliarity = !skillsFiltersStore.showFamiliarity;
  },

  useProgressBar: true,
  toggleUseProgressBar: () => {
    skillsFiltersStore.useProgressBar = !skillsFiltersStore.useProgressBar;
  }
});
