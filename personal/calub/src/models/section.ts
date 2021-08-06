import {
  CertificationsConfig,
  CharacterReferencesConfig,
  DividerConfig,
  EducationConfig,
  EventsConfig,
  HeaderConfig,
  OrganizationsConfig,
  ProjectsConfig,
  SectionType,
  SkillsConfig,
  WorkExperienceConfig
} from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export interface Section {
  title?: string;
  icon?: IconLookup;
  meta?: SectionMeta;
  content:
    | { type: SectionType.CERTIFICATIONS; value: CertificationsConfig }
    | { type: SectionType.CHARACTER_REFERENCES; value: CharacterReferencesConfig }
    | { type: SectionType.DIVIDER; value: DividerConfig }
    | { type: SectionType.EDUCATION; value: EducationConfig }
    | { type: SectionType.EVENTS; value: EventsConfig }
    | { type: SectionType.HEADER; value: HeaderConfig }
    | { type: SectionType.ORGANIZATIONS; value: OrganizationsConfig }
    | { type: SectionType.PROJECTS; value: ProjectsConfig }
    | { type: SectionType.SKILLS; value: SkillsConfig }
    | { type: SectionType.WORK_EXPERIENCE; value: WorkExperienceConfig };
}

export interface SectionMeta {
  displayHeader?: boolean;
  avoidPageBreak?: boolean;
}

export const DEFAULT_SECTION_META: SectionMeta = {
  displayHeader: true,
  avoidPageBreak: false
};
