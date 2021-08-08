import React from 'react';
import { useSnapshot } from 'valtio';

import { headerFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';

interface HeaderFiltersSectionProps {
  title?: string;
}

const HeaderFiltersSection: React.FC<HeaderFiltersSectionProps> = ({ title = 'Header' }) => {
  const headerFilters = useSnapshot(headerFiltersStore);

  return (
    <>
      <div className="flex flex-col gap-3 text-sm">
        <h3 className="font-semibold uppercase">{title}</h3>
        <div className="flex flex-col gap-4 ml-2">
          <ToggleComponent
            text="Show Profile Picture"
            checked={headerFilters.showProfilePicture}
            toggle={headerFilters.toggleProfilePicture}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderFiltersSection;
