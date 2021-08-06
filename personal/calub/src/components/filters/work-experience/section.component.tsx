import React from 'react';
import { useSnapshot } from 'valtio';

import { workExperienceFiltersStore } from '../../../store/filters/work-experience';
import ToggleComponent from '../../ui/toggle/toggle.component';

interface WorkExperienceFiltersSectionProps {
  title?: string;
}

const WorkExperienceFiltersSection: React.FC<WorkExperienceFiltersSectionProps> = ({
  title = 'Work Experience'
}) => {
  const snap = useSnapshot(workExperienceFiltersStore);

  return (
    <>
      <div className="flex flex-col gap-2 text-sm">
        <h3 className="font-semibold uppercase">{title}</h3>

        <div className="ml-2">
          <ToggleComponent
            text="Show Canada Classification?"
            checked={snap.showCanadaClassification}
            toggle={snap.toggleCanadaClassification}
          />
        </div>
      </div>
    </>
  );
};

export default WorkExperienceFiltersSection;
