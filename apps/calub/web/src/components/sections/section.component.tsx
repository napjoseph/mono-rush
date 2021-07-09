import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Section,
  SectionType,
  CertificationItem,
  WorkExperienceItem,
  InformationSnippetItem,
  DEFAULT_SECTION_META,
  HeaderConfig,
  DividerConfig,
  SectionMeta
} from '../../models';
import InformationSnippetsSectionComponent from './information-snippets/section.component';
import CertificationSectionComponent from './certifications/section.component';
import WorkExperienceSectionComponent from './work-experience/section.component';
import DividerSectionComponent from './divider/section.component';

import classes from './section.module.scss';
import HeaderSectionComponent from './header/section.component';

interface SectionComponentProps {
  section: Section;
}

const SectionComponent: React.FC<SectionComponentProps> = ({ section }) => {
  let content: JSX.Element;
  switch (section.ofType) {
    case SectionType.HEADER:
      content = <HeaderSectionComponent config={section.ofValue as HeaderConfig} />;
      break;
    case SectionType.INFORMATION_SNIPPETS:
      content = (
        <InformationSnippetsSectionComponent items={section.ofValue as InformationSnippetItem[]} />
      );
      break;
    case SectionType.DIVIDER:
      content = <DividerSectionComponent config={section.ofValue as DividerConfig} />;
      break;
    case SectionType.CERTIFICATIONS:
      content = <CertificationSectionComponent items={section.ofValue as CertificationItem[]} />;
      break;
    case SectionType.WORK_EXPERIENCE:
      content = <WorkExperienceSectionComponent items={section.ofValue as WorkExperienceItem[]} />;
      break;
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

export default SectionComponent;
