import React from 'react';
import { useSnapshot } from 'valtio';

import { skillsFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';

const SkillsFiltersSection: React.FC = (_props) => {
  const skillsFilters = useSnapshot(skillsFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={skillsFilters.showSection}
        toggle={skillsFilters.toggleSection}
      />

      <ToggleComponent
        text="Show Total Usage"
        checked={skillsFilters.showTotalUsage}
        toggle={skillsFilters.toggleShowTotalUsage}
      />

      {skillsFilters.showSection && (
        <ToggleComponent
          text="Show Familiarity"
          checked={skillsFilters.showFamiliarity}
          toggle={skillsFilters.toggleShowFamiliarity}
        />
      )}

      {skillsFilters.showSection && skillsFilters.showFamiliarity && (
        <ToggleComponent
          text="Use Progress Bar"
          checked={skillsFilters.useProgressBar}
          toggle={skillsFilters.toggleUseProgressBar}
        />
      )}
    </>
  );
};

export default SkillsFiltersSection;
