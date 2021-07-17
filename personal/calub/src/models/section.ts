import {
  CertificationsConfig,
  CharacterReferencesConfig,
  DividerConfig,
  EducationConfig,
  EventsConfig,
  HeaderConfig,
  OrganizationsConfig,
  ProjectsConfig,
  SkillsConfig,
  WorkExperienceConfig
} from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export enum SectionType {
  CERTIFICATIONS = 'certifications',
  CHARACTER_REFERENCES = 'character-references',
  DIVIDER = 'divider',
  EDUCATION = 'education',
  EVENTS = 'events',
  HEADER = 'header',
  ORGANIZATIONS = 'organizations',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  WORK_EXPERIENCE = 'work-experience'
}

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
