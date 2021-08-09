import { proxyWithComputed } from 'valtio/utils';

import { TagFilter, TagFilterStatus } from '../../models';

const filterTags = (tags: TagFilter[], status: TagFilterStatus): string[] => {
  return tags
    .filter((tag) => tag.status === status)
    .map((tag) => tag.value)
    .sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
};

const addTag = (tags: TagFilter[], value: string): TagFilter[] => {
  const tag: TagFilter = { value: value, status: TagFilterStatus.DEFAULT };
  return tags.map((tag) => tag.value).indexOf(value) === -1 ? [...tags, tag] : [...tags];
};

const removeTag = (tags: TagFilter[], value: string): TagFilter[] => {
  return tags.filter((tag) => tag.value !== value);
};

const updateTag = (tags: TagFilter[], value: string, status: TagFilterStatus): TagFilter[] => {
  return tags.map((tag) => ({
    ...tag,
    status: tag.value === value ? status : tag.status
  }));
};

export enum TagFilterType {
  AVAILABLE = 'available',
  INCLUDED = 'included',
  EXCLUDED = 'excluded'
}

export interface ProjectsFiltersStore {
  showSection: boolean;
  toggleSection: () => void;

  tags: TagFilter[];
  add: (value: string) => void;
  remove: (value: string) => void;
  update: (value: string, status: TagFilterStatus) => void;

  isAvailableTagsExpanded: boolean;
  isIncludedTagsExpanded: boolean;
  isExcludedTagsExpanded: boolean;
  toggleAvailableTagsExpanded: () => void;
  toggleIncludedTagsExpanded: () => void;
  toggleExcludedTagsExpanded: () => void;
}

export interface ProjectsFiltersStoreComputed {
  unusedTags?: string[];
  onlyWithTags?: string[];
  mustNotHaveTags?: string[];
}

export const projectsFiltersStore = proxyWithComputed<
  ProjectsFiltersStore,
  ProjectsFiltersStoreComputed
>(
  {
    showSection: true,
    toggleSection: () => {
      projectsFiltersStore.showSection = !projectsFiltersStore.showSection;
    },

    tags: [],
    add: (value: string) => {
      projectsFiltersStore.tags = addTag(projectsFiltersStore.tags, value);
    },
    remove: (value: string) => {
      projectsFiltersStore.tags = removeTag(projectsFiltersStore.tags, value);
    },
    update: (value: string, status: TagFilterStatus) => {
      projectsFiltersStore.tags = updateTag(projectsFiltersStore.tags, value, status);
    },
    isAvailableTagsExpanded: false,
    isIncludedTagsExpanded: true,
    isExcludedTagsExpanded: true,
    toggleAvailableTagsExpanded: () => {
      projectsFiltersStore.isAvailableTagsExpanded = !projectsFiltersStore.isAvailableTagsExpanded;
    },
    toggleIncludedTagsExpanded: () => {
      projectsFiltersStore.isIncludedTagsExpanded = !projectsFiltersStore.isIncludedTagsExpanded;
    },
    toggleExcludedTagsExpanded: () => {
      projectsFiltersStore.isExcludedTagsExpanded = !projectsFiltersStore.isExcludedTagsExpanded;
    }
  },
  {
    unusedTags: (snap) => filterTags(snap.tags, TagFilterStatus.DEFAULT),
    onlyWithTags: (snap) => filterTags(snap.tags, TagFilterStatus.ONLY_WITH),
    mustNotHaveTags: (snap) => filterTags(snap.tags, TagFilterStatus.MUST_NOT_HAVE)
  }
);
