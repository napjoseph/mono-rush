import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Section, SectionType, CertificationItem, WorkExperienceItem } from '../../models';
import CertificationSectionComponent from './certification/section.component';
import WorkExperienceSectionComponent from './work-experience/section.component';

import classes from './section.module.scss';

interface SectionComponentProps {
  section: Section;
}

const SectionComponent: React.FC<SectionComponentProps> = ({ section }) => {
  let content: JSX.Element;
  switch (section.ofType) {
    case SectionType.CERTIFICATIONS:
      content = <CertificationSectionComponent items={section.ofValue as CertificationItem[]} />;
      break;
    case SectionType.WORK_EXPERIENCE:
      content = <WorkExperienceSectionComponent items={section.ofValue as WorkExperienceItem[]} />;
      break;
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={section.icon} size="1x" fixedWidth className={classes.icon} />
        </div>
        <div>
          <h2 className={classes.header}>{section.name}</h2>
        </div>
      </div>
      <div className={classes.content}>{content && content}</div>
    </>
  );
};

export default SectionComponent;
