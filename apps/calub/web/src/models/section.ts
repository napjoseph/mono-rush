import { CertificationItem, WorkExperienceItem } from './sections';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export enum SectionType {
  WORK_EXPERIENCE = 'work-experience',
  CERTIFICATIONS = 'certifications'
}

export type SectionContent = WorkExperienceItem[] | CertificationItem[];

export interface Section {
  name: string;
  icon: IconLookup;
  ofType: SectionType;
  ofValue: SectionContent;
}

export const isWorkExperience = (content: SectionContent): content is WorkExperienceItem[] => {
  return true;
};

export const isCertification = (content: SectionContent): content is CertificationItem[] => {
  return true;
};
