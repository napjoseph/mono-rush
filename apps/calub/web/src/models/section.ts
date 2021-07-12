import {
  CertificationsConfig,
  WorkExperienceConfig,
  HeaderConfig,
  DividerConfig,
  EducationConfig,
  CharacterReferencesConfig
} from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export enum SectionType {
  HEADER = 'header',
  DIVIDER = 'divider',
  WORK_EXPERIENCE = 'work-experience',
  CERTIFICATIONS = 'certifications',
  EDUCATION = 'education',
  CHARACTER_REFERENCES = 'character-references'
}

export type SectionContent =
  | HeaderConfig
  | WorkExperienceConfig
  | CertificationsConfig
  | EducationConfig
  | DividerConfig
  | CharacterReferencesConfig
  | null;

export interface Section {
  title?: string;
  icon?: IconLookup;
  meta?: SectionMeta;
  ofType: SectionType;
  ofValue?: SectionContent;
}

export interface SectionMeta {
  displayHeader?: boolean;
}

export const DEFAULT_SECTION_META: SectionMeta = {
  displayHeader: true
};
