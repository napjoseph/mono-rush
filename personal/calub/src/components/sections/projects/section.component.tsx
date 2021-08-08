import React from 'react';
import { useSnapshot } from 'valtio';

import { ProjectsConfig, ProjectsItem, SectionType } from '../../../models';
import { tagFiltersStore, workExperienceFiltersStore } from '../../../store';
import hasAnyTag from '../../../utils/has-any-tag';
import hasRelatedSection from '../../../utils/has-related-section';
import ProjectsItemComponent from './projects-item.component';

interface ProjectsSectionComponentProps {
  config: ProjectsConfig;
}

const ProjectsSectionComponent: React.FC<ProjectsSectionComponentProps> = ({ config }) => {
  const tagFilters = useSnapshot(tagFiltersStore);
  const workExperienceFilters = useSnapshot(workExperienceFiltersStore);

  const { items } = config;

  let projects: ProjectsItem[] = items;
  if (tagFilters.mustNotHaveTags.length !== 0) {
    projects = projects.filter((item) => !hasAnyTag(item.tags, tagFilters.mustNotHaveTags));
  }
  if (tagFilters.onlyWithTags.length !== 0) {
    projects = items.filter((item) => hasAnyTag(item.tags, tagFilters.onlyWithTags));
  }

  // Remove projects with relationships outside showing.
  if (workExperienceFilters.showRelatedProjects) {
    projects = projects.filter(
      (item) => !hasRelatedSection(item.relatedTo || [], SectionType.WORK_EXPERIENCE)
    );
  }

  return (
    <>
      <div className="text-sm text-gray-700">
        {projects.length === 0 && (
          <span className="w-full text-xs">
            No projects found. Please update the selected filters on the sidebar.{' '}
          </span>
        )}
        {projects.length > 0 && (
          <ul className="ml-4 list-square">
            {projects.map((item, index) => {
              return (
                <li key={index}>
                  <ProjectsItemComponent item={item} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default ProjectsSectionComponent;
