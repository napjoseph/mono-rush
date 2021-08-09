import React from 'react';

import { SectionType, SidebarContentSection } from '../../models';
import HeaderFiltersSection from './header/section.component';
import SkillsFiltersSection from './skills/section.component';
import ProjectsFiltersSection from './projects/section.component';
import WorkExperienceFiltersSection from './work-experience/section.component';
import EducationFiltersSection from './education/section.component';
import CertificationsFiltersSection from './certifications/section.component';
import EventsFiltersSection from './events/section.component';
import OrganizationsFiltersSection from './organizations/section.component';
import CharacterReferencesFiltersSection from './character-references/section.component';
import DividerFiltersSection from './divider/section.component';

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
    case SectionType.DIVIDER:
      return <DividerFiltersSection />;
    case SectionType.WORK_EXPERIENCE:
      return <WorkExperienceFiltersSection />;
    case SectionType.SKILLS:
      return <SkillsFiltersSection />;
    case SectionType.PROJECTS:
      return <ProjectsFiltersSection />;
    case SectionType.EDUCATION:
      return <EducationFiltersSection />;
    case SectionType.CERTIFICATIONS:
      return <CertificationsFiltersSection />;
    case SectionType.EVENTS:
      return <EventsFiltersSection />;
    case SectionType.ORGANIZATIONS:
      return <OrganizationsFiltersSection />;
    case SectionType.CHARACTER_REFERENCES:
      return <CharacterReferencesFiltersSection />;
  }
};

export default FiltersSection;
