export interface WorkExperienceRole {
  title: string;
  canadaClassification: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface WorkExperienceItem {
  title: string;
  url: string;
  address: string;
  logoSrc: string;
  logoAlt: string;
  roles: WorkExperienceRole[];
}
