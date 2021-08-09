import React from 'react';
import { useSnapshot } from 'valtio';

import { workExperienceFiltersStore } from '../../../store';
import ToggleComponent from '../../ui/toggle/toggle.component';

const DEFAULT_TITLE = 'Work Experience';

interface WorkExperienceFiltersSectionProps {
  title?: string;
}

const WorkExperienceFiltersSection: React.FC<WorkExperienceFiltersSectionProps> = ({
  title = 'Work Experience'
}) => {
  const snap = useSnapshot(workExperienceFiltersStore);

  if (title === undefined || title.trim() === '') {
    title = DEFAULT_TITLE;
  }

  return (
    <>
      <div className="flex flex-col gap-3 text-sm">
        <h3 className="font-semibold uppercase">{title}</h3>
        <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </>
  );
};

export default WorkExperienceFiltersSection;
