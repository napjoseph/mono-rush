import React from 'react';
import { useSnapshot } from 'valtio';

import { dividerFiltersStore } from '../../../store/filters/divider';
import ToggleComponent from '../../ui/toggle/toggle.component';

const DividerFiltersSection: React.FC = (_props) => {
  const dividerFilters = useSnapshot(dividerFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={dividerFilters.showSection}
        toggle={dividerFilters.toggleSection}
      />
    </>
  );
};

export default DividerFiltersSection;
