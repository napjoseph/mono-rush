import {
  CertificationsConfig,
  WorkExperienceItem,
  HeaderConfig,
  DividerConfig,
  EducationConfig
} from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export enum SectionType {
  HEADER = 'header',
  DIVIDER = 'divider',
  WORK_EXPERIENCE = 'work-experience',
  CERTIFICATIONS = 'certifications',
  EDUCATION = 'education'
}

export type SectionContent =
  | HeaderConfig
  | WorkExperienceItem[]
  | CertificationsConfig
  | EducationConfig
  | DividerConfig
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
