import React from 'react';
import { useSnapshot } from 'valtio';

import { headerFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';
import ProfilePictureList from './profile-picture-list.component';

const HeaderFiltersSection: React.FC = (_props) => {
  const headerFilters = useSnapshot(headerFiltersStore);
  return (
    <>
      <ToggleComponent
        text="Show Profile Picture"
        checked={headerFilters.showProfilePicture}
        toggle={headerFilters.toggleProfilePicture}
      />

      {headerFilters.showProfilePicture && headerFilters.profilePictures.length > 0 && (
        <ToggleComponent
          text="Use Circular Image"
          checked={headerFilters.useCircularImage}
          toggle={headerFilters.toggleUseCircularImage}
        />
      )}

      {headerFilters.showProfilePicture && headerFilters.profilePictures.length > 0 && (
        <ToggleComponent
          text="Add Drop Shadow"
          checked={headerFilters.addDropShadow}
          toggle={headerFilters.toggleAddDropShadow}
        />
      )}

      {headerFilters.showProfilePicture && headerFilters.profilePictures.length > 0 && (
        <ProfilePictureList
          title="Select Profile Picture"
          choices={headerFilters.profilePictures}
          selectedIndex={headerFilters.selectedProfilePictureIndex}
          isExpanded={headerFilters.isSelectProfilePicturesExpanded}
          toggleExpand={headerFilters.toggleSelectProfilePicturesExpanded}
          select={headerFilters.selectProfilePicture}
        />
      )}
    </>
  );
};

export default HeaderFiltersSection;
