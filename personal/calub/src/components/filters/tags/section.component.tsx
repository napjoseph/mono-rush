import React from 'react';
import { useSnapshot } from 'valtio';

import { TagFilterType, tagFiltersStore } from '../../../store';
import TagFilterList from './tag-filter-list.component';

const TagFiltersSection: React.FC = (_props) => {
  const tagFilters = useSnapshot(tagFiltersStore);

  return (
    <>
      <TagFilterList
        title="Available Tags"
        tags={tagFilters.unusedTags}
        isExpanded={tagFilters.isAvailableTagsExpanded}
        toggleExpand={tagFilters.toggleAvailableTagsExpanded}
        ofType={TagFilterType.AVAILABLE}
      />
      <TagFilterList
        title="Only With Tags"
        tags={tagFilters.onlyWithTags}
        isExpanded={tagFilters.isIncludedTagsExpanded}
        toggleExpand={tagFilters.toggleIncludedTagsExpanded}
        ofType={TagFilterType.INCLUDED}
      />
      <TagFilterList
        title="Must Not Have Tags"
        tags={tagFilters.mustNotHaveTags}
        isExpanded={tagFilters.isExcludedTagsExpanded}
        toggleExpand={tagFilters.toggleExcludedTagsExpanded}
        ofType={TagFilterType.EXCLUDED}
      />
    </>
  );
};

export default TagFiltersSection;
