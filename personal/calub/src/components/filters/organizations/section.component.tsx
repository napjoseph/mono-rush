import React from 'react';
import { useSnapshot } from 'valtio';

import { organizationsFiltersStore } from '../../../store/filters/organizations';
import ToggleComponent from '../../ui/toggle/toggle.component';

const OrganizationsFiltersSection: React.FC = (_props) => {
  const organizationsFilters = useSnapshot(organizationsFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={organizationsFilters.showSection}
        toggle={organizationsFilters.toggleSection}
      />
    </>
  );
};

export default OrganizationsFiltersSection;
