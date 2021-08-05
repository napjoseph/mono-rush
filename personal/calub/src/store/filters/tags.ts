import { proxyWithComputed } from 'valtio/utils';

import { TagFilter, TagFilterStatus } from '../../models';

const filterTags = (tags: TagFilter[], status: TagFilterStatus): string[] => {
  return tags
    .filter((tag) => tag.status === status)
    .map((tag) => tag.value)
    .sort();
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

export interface TagFiltersStore {
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

export interface TagFiltersStoreComputed {
  unusedTags?: string[];
  onlyWithTags?: string[];
  mustNotHaveTags?: string[];
}

export const tagFiltersStore = proxyWithComputed<TagFiltersStore, TagFiltersStoreComputed>(
  {
    tags: [],
    add: (value: string) => {
      tagFiltersStore.tags = addTag(tagFiltersStore.tags, value);
    },
    remove: (value: string) => {
      tagFiltersStore.tags = removeTag(tagFiltersStore.tags, value);
    },
    update: (value: string, status: TagFilterStatus) => {
      tagFiltersStore.tags = updateTag(tagFiltersStore.tags, value, status);
    },
    isAvailableTagsExpanded: false,
    isIncludedTagsExpanded: true,
    isExcludedTagsExpanded: true,
    toggleAvailableTagsExpanded: () => {
      tagFiltersStore.isAvailableTagsExpanded = !tagFiltersStore.isAvailableTagsExpanded;
    },
    toggleIncludedTagsExpanded: () => {
      tagFiltersStore.isIncludedTagsExpanded = !tagFiltersStore.isIncludedTagsExpanded;
    },
    toggleExcludedTagsExpanded: () => {
      tagFiltersStore.isExcludedTagsExpanded = !tagFiltersStore.isExcludedTagsExpanded;
    }
  },
  {
    unusedTags: (snap) => filterTags(snap.tags, TagFilterStatus.DEFAULT),
    onlyWithTags: (snap) => filterTags(snap.tags, TagFilterStatus.ONLY_WITH),
    mustNotHaveTags: (snap) => filterTags(snap.tags, TagFilterStatus.MUST_NOT_HAVE)
  }
);
