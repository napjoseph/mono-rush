import React from 'react';
import { useSnapshot } from 'valtio';

import { TagFilterType, projectsFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';
import TagFilterList from './tag-filter-list.component';

const ProjectFiltersSection: React.FC = (_props) => {
  const projectsFilters = useSnapshot(projectsFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={projectsFilters.showSection}
        toggle={projectsFilters.toggleSection}
      />

      {projectsFilters.showSection && (
        <TagFilterList
          title="Available Tags"
          tags={projectsFilters.unusedTags}
          isExpanded={projectsFilters.isAvailableTagsExpanded}
          toggleExpand={projectsFilters.toggleAvailableTagsExpanded}
          ofType={TagFilterType.AVAILABLE}
        />
      )}
      {projectsFilters.showSection && (
        <TagFilterList
          title="Only With Tags"
          tags={projectsFilters.onlyWithTags}
          isExpanded={projectsFilters.isIncludedTagsExpanded}
          toggleExpand={projectsFilters.toggleIncludedTagsExpanded}
          ofType={TagFilterType.INCLUDED}
        />
      )}
      {projectsFilters.showSection && (
        <TagFilterList
          title="Must Not Have Tags"
          tags={projectsFilters.mustNotHaveTags}
          isExpanded={projectsFilters.isExcludedTagsExpanded}
          toggleExpand={projectsFilters.toggleExcludedTagsExpanded}
          ofType={TagFilterType.EXCLUDED}
        />
      )}
    </>
  );
};

export default ProjectFiltersSection;
