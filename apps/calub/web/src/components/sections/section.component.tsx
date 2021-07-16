import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Section, SectionType, DEFAULT_SECTION_META, SectionMeta } from '../../models';
import CertificationsSectionComponent from './certifications/section.component';
import CharacterReferencesSectionComponent from './character-references/section.component';
import DividerSectionComponent from './divider/section.component';
import EducationSectionComponent from './education/section.component';
import EventsSectionComponent from './events/section.component';
import OrganizationsSectionComponent from './organizations/section.component';
import ProjectsSectionComponent from './projects/section.component';
import SkillsSectionComponent from './skills/section.component';
import WorkExperienceSectionComponent from './work-experience/section.component';

import classes from './section.module.scss';
import HeaderSectionComponent from './header/section.component';

interface SectionComponentProps {
  section: Section;
}

const SectionComponent: React.FC<SectionComponentProps> = ({ section }) => {
  const content = selectContent(section);
  if (!content) {
    return null;
  }

  // Just display the content if there are no headers.
  const meta: SectionMeta = { ...DEFAULT_SECTION_META, ...section.meta };
  if (!meta.displayHeader) {
    return <div className={classes.container}>{content && content}</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {section.icon && (
          <div className={classes.iconContainer}>
            <FontAwesomeIcon icon={section.icon} size="1x" fixedWidth className={classes.icon} />
          </div>
        )}
        {section.title && (
          <div>
            <h2 className={classes.title}>{section.title}</h2>
          </div>
        )}
      </div>

      <div className={classes.content}>{content && content}</div>
    </div>
  );
};

const selectContent = (section: Section): JSX.Element | null => {
  switch (section.content.type) {
    case SectionType.CERTIFICATIONS:
      return <CertificationsSectionComponent config={section.content.value} />;
    case SectionType.CHARACTER_REFERENCES:
      return <CharacterReferencesSectionComponent config={section.content.value} />;
    case SectionType.DIVIDER:
      return <DividerSectionComponent config={section.content.value} />;
    case SectionType.EDUCATION:
      return <EducationSectionComponent config={section.content.value} />;
    case SectionType.EVENTS:
      return <EventsSectionComponent config={section.content.value} />;
    case SectionType.HEADER:
      return <HeaderSectionComponent config={section.content.value} />;
    case SectionType.ORGANIZATIONS:
      return <OrganizationsSectionComponent config={section.content.value} />;
    case SectionType.PROJECTS:
      return <ProjectsSectionComponent config={section.content.value} />;
    case SectionType.SKILLS:
      return <SkillsSectionComponent config={section.content.value} />;
    case SectionType.WORK_EXPERIENCE:
      return <WorkExperienceSectionComponent config={section.content.value} />;
    default:
      return null;
  }
};

export default SectionComponent;
