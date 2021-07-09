import { CertificationItem, WorkExperienceItem, InformationSnippetItem } from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export enum SectionType {
  INFORMATION_SNIPPETS = 'information-snippets',
  WORK_EXPERIENCE = 'work-experience',
  CERTIFICATIONS = 'certifications'
}

export type SectionContent = WorkExperienceItem[] | CertificationItem[] | InformationSnippetItem[];

export interface Section {
  name?: string;
  icon?: IconLookup;
  meta?: SectionMeta;
  ofType: SectionType;
  ofValue: SectionContent;
}

export interface SectionMeta {
  displayHeader?: boolean;
}

export const DEFAULT_SECTION_META: SectionMeta = {
  displayHeader: true
};
