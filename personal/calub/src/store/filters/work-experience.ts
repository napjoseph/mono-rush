import { proxy } from 'valtio';

export interface WorkExperienceFiltersStore {
  showCanadaClassification: boolean;
  toggleCanadaClassification: () => void;
}

export const workExperienceFiltersStore = proxy<WorkExperienceFiltersStore>({
  showCanadaClassification: false,
  toggleCanadaClassification: () => {
    workExperienceFiltersStore.showCanadaClassification =
      !workExperienceFiltersStore.showCanadaClassification;
  }
});
