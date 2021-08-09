import React from 'react';
import { useSnapshot } from 'valtio';
import { SectionType } from '../../../models';

import { sidebarContentStore } from '../../../store';
import HeaderFiltersSection from '../../filters/header/section.component';
import SkillsFiltersSection from '../../filters/skills/section.component';
import TagFiltersSection from '../../filters/tags/section.component';
import WorkExperienceFiltersSection from '../../filters/work-experience/section.component';
import PrintButtonComponent from '../../ui/print/print-button.component';

const SidebarContentComponent: React.FC = (_props) => {
  const sidebarContent = useSnapshot(sidebarContentStore);

  return (
    <div className="flex flex-col flex-wrap gap-5 p-5 break-words place-content-center">
      <PrintButtonComponent />

      {sidebarContent.sections.map((section, index) => {
        switch (section.type) {
          case SectionType.HEADER:
            return <HeaderFiltersSection key={index} title={section.title} />;
          case SectionType.WORK_EXPERIENCE:
            return <WorkExperienceFiltersSection key={index} title={section.title} />;
          case SectionType.PROJECTS:
            return <TagFiltersSection key={index} title={section.title} />;
          case SectionType.SKILLS:
            return <SkillsFiltersSection key={index} title={section.title} />;
        }
      })}
    </div>
  );
};

export default SidebarContentComponent;
