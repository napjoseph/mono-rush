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
          section.content.value.items.map((skills) => {
            skills.items.map((skill) => {
              tagFiltersStore.add(skill.title);
            });
          });
          return;
        case SectionType.PROJECTS:
          section.content.value.items.map((project) => {
            project.tags.map((tag) => {
              tagFiltersStore.add(tag);
            });
          });
      }
    });
  }
});
