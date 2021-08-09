import React from 'react';
import { useSnapshot } from 'valtio';

import { skillsFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';

const SkillsFiltersSection: React.FC = (_props) => {
  const skillsFilters = useSnapshot(skillsFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Familiarity"
        checked={skillsFilters.showFamiliarity}
        toggle={skillsFilters.toggleShowFamiliarity}
      />

      {skillsFilters.showFamiliarity && (
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
