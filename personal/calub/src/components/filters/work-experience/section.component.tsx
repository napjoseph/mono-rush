import React from 'react';
import { useSnapshot } from 'valtio';

import { workExperienceFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';

const WorkExperienceFiltersSection: React.FC = (_props) => {
  const snap = useSnapshot(workExperienceFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Canada National Occupational Classification (NOC)"
        checked={snap.showCanadaClassification}
        toggle={snap.toggleCanadaClassification}
      />

      <ToggleComponent
        text="Show Related Projects"
        checked={snap.showRelatedProjects}
        toggle={snap.toggleRelatedProjects}
      />
    </>
  );
};

export default WorkExperienceFiltersSection;
