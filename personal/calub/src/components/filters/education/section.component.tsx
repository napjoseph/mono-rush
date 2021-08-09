import React from 'react';
import { useSnapshot } from 'valtio';

import { educationFiltersStore } from '../../../store/filters/education';
import ToggleComponent from '../../ui/toggle/toggle.component';

const EducationFiltersSection: React.FC = (_props) => {
  const educationFilters = useSnapshot(educationFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={educationFilters.showSection}
        toggle={educationFilters.toggleSection}
      />
    </>
  );
};

export default EducationFiltersSection;
