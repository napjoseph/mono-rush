import { proxy } from 'valtio';

import {
  Config,
  DEFAULT_CONFIG,
  HeaderConfig,
  ProjectsItem,
  SectionType,
  SkillsCategory
} from '../models';
import { projectsFiltersStore, workExperienceFiltersStore, headerFiltersStore } from './filters';
import { sidebarContentStore } from './sidebar';

export interface ConfigStore {
  config: Config;
  updateConfig: (config: Config) => void;
}

export const configStore = proxy<ConfigStore>({
  config: DEFAULT_CONFIG,
  updateConfig: (config: Config) => {
    configStore.config = config;

    config.sections.map((section) => {
      // Populate the sidebar content for each section.
      sidebarContentStore.addSection({
        title: section.title || '',
        type: section.content.type
      });

      // Parse individual content types.
      switch (section.content.type) {
        case SectionType.HEADER:
          parseHeader(section.content.value);
          return;
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

const parseHeader = (config: HeaderConfig) => {
  (config.images || []).map((image) => {
    if (!image.use) return;
    headerFiltersStore.addProfilePicture(image);
  });
};

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
          projectsFiltersStore.add(skill.title);
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
        projectsFiltersStore.add(tag);
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
