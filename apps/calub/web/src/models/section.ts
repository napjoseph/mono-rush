import {
  CertificationsConfig,
  CharacterReferencesConfig,
  DividerConfig,
  EducationConfig,
  EventsConfig,
  HeaderConfig,
  OrganizationsConfig,
  WorkExperienceConfig
} from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export enum SectionType {
  HEADER = 'header',
  DIVIDER = 'divider',
  WORK_EXPERIENCE = 'work-experience',
  CERTIFICATIONS = 'certifications',
  EDUCATION = 'education',
  CHARACTER_REFERENCES = 'character-references',
  ORGANIZATIONS = 'organizations',
  EVENTS = 'events'
}

export interface Section {
  title?: string;
  icon?: IconLookup;
  meta?: SectionMeta;
  content:
    | { type: SectionType.HEADER; value: HeaderConfig }
    | { type: SectionType.DIVIDER; value: DividerConfig }
    | { type: SectionType.WORK_EXPERIENCE; value: WorkExperienceConfig }
    | { type: SectionType.CERTIFICATIONS; value: CertificationsConfig }
    | { type: SectionType.EDUCATION; value: EducationConfig }
    | { type: SectionType.CHARACTER_REFERENCES; value: CharacterReferencesConfig }
    | { type: SectionType.ORGANIZATIONS; value: OrganizationsConfig }
    | { type: SectionType.EVENTS; value: EventsConfig };
}

export interface SectionMeta {
  displayHeader?: boolean;
}

export const DEFAULT_SECTION_META: SectionMeta = {
  displayHeader: true
};
