import { proxy } from 'valtio';

import { Config, DEFAULT_CONFIG, ProjectsItem, SectionType, SkillsCategory } from '../models';
import { tagFiltersStore, workExperienceFiltersStore } from './filters';

export interface ConfigStore {
  config: Config;
  updateConfig: (config: Config) => void;
}

export const configStore = proxy<ConfigStore>({
  config: DEFAULT_CONFIG,
  updateConfig: (config: Config) => {
    configStore.config = config;

    config.sections.map((section) => {
      switch (section.content.type) {
        case SectionType.SKILLS:
          parseSkills(section.content.value.items);
          return;
        case SectionType.PROJECTS:
          parseProjects(section.content.value.items);
          return;
      }
    });
  }
});

const parseSkills = (skillsCategories: SkillsCategory[]) => {
  skillsCategories
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
          // Populate the tags.
          tagFiltersStore.add(skill.title);
        });
    });
};

const parseProjects = (projects: ProjectsItem[]) => {
  projects
    .filter((project) => {
      if (project.meta === undefined) return true;
      if (project.meta.show === undefined) return true;
      return project.meta.show;
    })
    .map((project) => {
      project.tags.map((tag) => {
        // Populate the tags.
        tagFiltersStore.add(tag);
      });
      (project.relatedTo || []).map((relationship) => {
        // Populate the project relationships.
        switch (relationship.type) {
          case SectionType.WORK_EXPERIENCE:
            workExperienceFiltersStore.addRelatedProjects(relationship.key, project);
            return;
        }
      });
    });
};
