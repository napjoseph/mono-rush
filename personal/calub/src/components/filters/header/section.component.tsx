import React from 'react';
import { useSnapshot } from 'valtio';

import { headerFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';
import ProfilePictureList from './profile-picture-list.component';

interface HeaderFiltersSectionProps {
  title?: string;
}

const HeaderFiltersSection: React.FC<HeaderFiltersSectionProps> = ({ title = 'Header' }) => {
  const headerFilters = useSnapshot(headerFiltersStore);

  return (
    <>
      <div className="flex flex-col gap-3 text-sm">
        <h3 className="font-semibold uppercase">{title}</h3>
        <div className="flex flex-col gap-4">
          <ToggleComponent
            text="Show Profile Picture"
            checked={headerFilters.showProfilePicture}
            toggle={headerFilters.toggleProfilePicture}
          />

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
        </div>
      </div>
    </>
  );
};

export default HeaderFiltersSection;
