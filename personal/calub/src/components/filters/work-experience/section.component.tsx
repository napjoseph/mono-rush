import React from 'react';
import { useSnapshot } from 'valtio';

import { workExperienceFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';

const WorkExperienceFiltersSection: React.FC = (_props) => {
  const workExperienceFilters = useSnapshot(workExperienceFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={workExperienceFilters.showSection}
        toggle={workExperienceFilters.toggleSection}
      />

      {workExperienceFilters.showSection && (
        <ToggleComponent
          text="Show Canada National Occupational Classification (NOC)"
          checked={workExperienceFilters.showCanadaClassification}
          toggle={workExperienceFilters.toggleCanadaClassification}
        />
      )}

      {workExperienceFilters.showSection && (
        <ToggleComponent
          text="Show Related Projects"
          checked={workExperienceFilters.showRelatedProjects}
          toggle={workExperienceFilters.toggleRelatedProjects}
        />
      )}
    </>
  );
};

export default WorkExperienceFiltersSection;
