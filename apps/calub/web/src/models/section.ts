import {
  CertificationItem,
  WorkExperienceItem,
  InformationSnippetItem,
  HeaderConfig,
  DividerConfig
} from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export enum SectionType {
  HEADER = 'header',
  INFORMATION_SNIPPETS = 'information-snippets',
  DIVIDER = 'divider',
  WORK_EXPERIENCE = 'work-experience',
  CERTIFICATIONS = 'certifications'
}

export type SectionContent =
  | HeaderConfig
  | WorkExperienceItem[]
  | CertificationItem[]
  | InformationSnippetItem[]
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
