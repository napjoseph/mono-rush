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
  image: WorkExperienceItemImage;
  roles: WorkExperienceRole[];
}

export interface WorkExperienceItemImage {
  source?: 'static' | 'external';
  path: string;
  title: string;
}
