import { proxy } from 'valtio';

import { Config, DEFAULT_CONFIG, SectionType } from '../models';
import { tagFiltersStore } from './filters';

export interface ConfigStore {
  config: Config;
  updateConfig: (config: Config) => void;
}

export const configStore = proxy<ConfigStore>({
  config: DEFAULT_CONFIG,
  updateConfig: (config: Config) => {
    configStore.config = config;

    // Populate the tags.
    config.sections.map((section) => {
      switch (section.content.type) {
        case SectionType.SKILLS:
          section.content.value.items
            .filter((categories) => {
              if (categories.meta === undefined) return true;
              if (categories.meta.show === undefined) return true;
              return categories.meta.show;
            })
            .map((skills) => {
              skills.items
                .filter((skill) => {
                  if (skill.meta === undefined) return true;
                  if (skill.meta.show === undefined) return true;
                  return skill.meta.show;
                })
                .map((skill) => {
                  tagFiltersStore.add(skill.title);
                });
            });
          return;
        case SectionType.PROJECTS:
          section.content.value.items
            .filter((project) => {
              if (project.meta === undefined) return true;
              if (project.meta.show === undefined) return true;
              return project.meta.show;
            })
            .map((project) => {
              project.tags.map((tag) => {
                tagFiltersStore.add(tag);
              });
            });
      }
    });
  }
});
