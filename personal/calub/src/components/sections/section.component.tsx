import React from 'react';
import { useSnapshot } from 'valtio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import { Section, SectionType, DEFAULT_SECTION_META, SectionMeta } from '../../models';
import CertificationsSectionComponent from './certifications/section.component';
import CharacterReferencesSectionComponent from './character-references/section.component';
import DividerSectionComponent from './divider/section.component';
import EducationSectionComponent from './education/section.component';
import EventsSectionComponent from './events/section.component';
import HeaderSectionComponent from './header/section.component';
import OrganizationsSectionComponent from './organizations/section.component';
import ProjectsSectionComponent from './projects/section.component';
import SkillsSectionComponent from './skills/section.component';
import WorkExperienceSectionComponent from './work-experience/section.component';
import {
  certificationsFiltersStore,
  characterReferencesFiltersStore,
  dividerFiltersStore,
  educationFiltersStore,
  eventsFiltersStore,
  headerFiltersStore,
  organizationsFiltersStore,
  projectsFiltersStore,
  skillsFiltersStore,
  workExperienceFiltersStore
} from '../../store';
import joinClassNames from '../../utils/join-class-names';

interface SectionComponentProps {
  section: Section;
}

const SectionComponent: React.FC<SectionComponentProps> = ({ section }) => {
  const header = useSnapshot(headerFiltersStore);
  const divider = useSnapshot(dividerFiltersStore);
  const workExperience = useSnapshot(workExperienceFiltersStore);
  const skills = useSnapshot(skillsFiltersStore);
  const projects = useSnapshot(projectsFiltersStore);
  const education = useSnapshot(educationFiltersStore);
  const certifications = useSnapshot(certificationsFiltersStore);
  const events = useSnapshot(eventsFiltersStore);
  const organizations = useSnapshot(organizationsFiltersStore);
  const characterReferences = useSnapshot(characterReferencesFiltersStore);

  let content: JSX.Element | null = null;
  switch (section.content.type) {
    case SectionType.HEADER:
      content = header.showSection ? (
        <HeaderSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.DIVIDER:
      content = divider.showSection ? (
        <DividerSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.WORK_EXPERIENCE:
      content = workExperience.showSection ? (
        <WorkExperienceSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.SKILLS:
      content = skills.showSection ? (
        <SkillsSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.PROJECTS:
      content = projects.showSection ? (
        <ProjectsSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.EDUCATION:
      content = education.showSection ? (
        <EducationSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.CERTIFICATIONS:
      content = certifications.showSection ? (
        <CertificationsSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.EVENTS:
      content = events.showSection ? (
        <EventsSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.ORGANIZATIONS:
      content = organizations.showSection ? (
        <OrganizationsSectionComponent config={section.content.value} />
      ) : null;
      break;
    case SectionType.CHARACTER_REFERENCES:
      content = characterReferences.showSection ? (
        <CharacterReferencesSectionComponent config={section.content.value} />
      ) : null;
      break;
  }

  if (!content) {
    return null;
  }

  const meta: SectionMeta = { ...DEFAULT_SECTION_META, ...section.meta };

  // Just display the content if there are no headers.
  if (!meta.displayHeader) {
    return (
      <motion.div
        className={joinClassNames('pb-3', meta.avoidPageBreak ? 'print:break-inside-avoid' : '')}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            translateY: '15px'
          },
          visible: {
            opacity: 1,
            translateY: '0px',
            transition: {
              duration: 0.5
            }
          }
        }}
      >
        {content && content}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={joinClassNames('pb-3', meta.avoidPageBreak ? 'print:break-inside-avoid' : '')}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          translateY: '15px'
        },
        visible: {
          opacity: 1,
          translateY: '0px',
          transition: {
            duration: 0.5
          }
        }
      }}
    >
      <div className="flex items-center">
        {section.icon && (
          <div className="mr-2">
            <FontAwesomeIcon icon={section.icon} size="1x" fixedWidth className="text-gray-600" />
          </div>
        )}
        {section.title && (
          <div>
            <h2 className="font-bold uppercase">{section.title}</h2>
          </div>
        )}
      </div>

      <div className="mt-3 ml-5">{content && content}</div>
    </motion.div>
  );
};

export default SectionComponent;
