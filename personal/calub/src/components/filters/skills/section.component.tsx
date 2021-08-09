import React from 'react';
import { useSnapshot } from 'valtio';

import { skillsFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';

const DEFAULT_TITLE = 'Skills';

interface SkillsFiltersSectionProps {
  title?: string;
}

const SkillsFiltersSection: React.FC<SkillsFiltersSectionProps> = ({ title }) => {
  const skillsFilters = useSnapshot(skillsFiltersStore);

  if (title === undefined || title.trim() === '') {
    title = DEFAULT_TITLE;
  }

  return (
    <>
      <div className="flex flex-col gap-3 text-sm">
        <h3 className="font-semibold uppercase">{title}</h3>
        <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </>
  );
};

export default SkillsFiltersSection;
