import { proxy } from 'valtio';

export interface SkillsFiltersStore {
  showFamiliarity: boolean;
  toggleShowFamiliarity: () => void;

  useProgressBar: boolean;
  toggleUseProgressBar: () => void;
}

export const skillsFiltersStore = proxy<SkillsFiltersStore>({
  showFamiliarity: true,
  toggleShowFamiliarity: () => {
    skillsFiltersStore.showFamiliarity = !skillsFiltersStore.showFamiliarity;
  },

  useProgressBar: true,
  toggleUseProgressBar: () => {
    skillsFiltersStore.useProgressBar = !skillsFiltersStore.useProgressBar;
  }
});
