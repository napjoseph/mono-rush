import { proxy } from 'valtio';

const removeTag = (tags: string[], value: string): string[] => tags.filter((tag) => tag !== value);

const addTag = (tags: string[], value: string): string[] =>
  tags.indexOf(value) === -1 ? [...tags, value] : [...tags];

export interface TagFiltersStore {
  included: string[];
  add: (tag: string) => void;
  remove: (tag: string) => void;
}

export const tagFiltersStore = proxy<TagFiltersStore>({
  included: [],
  add: (tag: string) => {
    tagFiltersStore.included = addTag(tagFiltersStore.included, tag);
  },
  remove: (tag: string) => {
    tagFiltersStore.included = removeTag(tagFiltersStore.included, tag);
  }
});
