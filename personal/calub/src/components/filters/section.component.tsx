import React from 'react';

import { SectionType, SidebarContentSection } from '../../models';
import HeaderFiltersSection from './header/section.component';
import SkillsFiltersSection from './skills/section.component';
import TagFiltersSection from './tags/section.component';
import WorkExperienceFiltersSection from './work-experience/section.component';

interface FiltersSectionProps {
  section: SidebarContentSection;
}

const FiltersSection: React.FC<FiltersSectionProps> = ({ section }) => {
  const content = selectContent(section);
  if (!content) return null;

  return (
    <div className="flex flex-col gap-3 text-sm">
      <h3 className="font-semibold uppercase">{section.title}</h3>
      <div className="flex flex-col gap-2">{content}</div>
    </div>
  );
};

const selectContent = (section: SidebarContentSection): JSX.Element | null => {
  switch (section.type) {
    case SectionType.HEADER:
      return <HeaderFiltersSection />;
    case SectionType.WORK_EXPERIENCE:
      return <WorkExperienceFiltersSection />;
    case SectionType.PROJECTS:
      return <TagFiltersSection />;
    case SectionType.SKILLS:
      return <SkillsFiltersSection />;
  }
};

export default FiltersSection;
