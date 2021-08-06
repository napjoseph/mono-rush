import { proxy } from 'valtio';

import { ProjectsItem } from '../../models';

export interface WorkExperienceFiltersStore {
  showCanadaClassification: boolean;
  toggleCanadaClassification: () => void;
  showRelatedProjects: boolean;
  toggleRelatedProjects: () => void;

  // We're using this instead of maps since valtio doesn't support tracking maps
  // and sets.
  relatedProjects: {
    key: string;
    value: ProjectsItem;
  }[];
  addRelatedProjects: (key: string, value: ProjectsItem) => void;
}

export const workExperienceFiltersStore = proxy<WorkExperienceFiltersStore>({
  showCanadaClassification: false,
  toggleCanadaClassification: () => {
    workExperienceFiltersStore.showCanadaClassification =
      !workExperienceFiltersStore.showCanadaClassification;
  },
  showRelatedProjects: false,
  toggleRelatedProjects: () => {
    workExperienceFiltersStore.showRelatedProjects =
      !workExperienceFiltersStore.showRelatedProjects;
  },

  relatedProjects: [],
  addRelatedProjects: (key: string, value: ProjectsItem) => {
    workExperienceFiltersStore.relatedProjects.push({ key, value });
  }
});
