import { CertificationItem, WorkExperienceItem, HeaderConfig, DividerConfig } from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export enum SectionType {
  HEADER = 'header',
  DIVIDER = 'divider',
  WORK_EXPERIENCE = 'work-experience',
  CERTIFICATIONS = 'certifications'
}

export type SectionContent =
  | HeaderConfig
  | WorkExperienceItem[]
  | CertificationItem[]
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
