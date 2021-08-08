import React from 'react';
import HeaderFiltersSection from '../../filters/header/section.component';
import SkillsFiltersSection from '../../filters/skills/section.component';

import TagFiltersSection from '../../filters/tags/section.component';
import WorkExperienceFiltersSection from '../../filters/work-experience/section.component';
import PrintButtonComponent from '../../ui/print/print-button.component';

const SidebarContentComponent: React.FC = (_props) => {
  return (
    <div className="flex flex-col flex-wrap gap-5 p-5 break-words place-content-center">
      <PrintButtonComponent />

      <HeaderFiltersSection />
      <WorkExperienceFiltersSection />
      <TagFiltersSection />
      <SkillsFiltersSection />
    </div>
  );
};

export default SidebarContentComponent;
