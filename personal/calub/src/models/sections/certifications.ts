export interface CertificationsConfig {
  meta?: CertificationsMeta;
  items: CertificationItem[];
}

export type CertificationsSubHeaderTypes =
  | 'credentialType'
  | 'credentialId'
  | 'offeredBy'
  | 'issuingOrganization'
  | 'issuedDate'
  | 'gradeAchieved';

export interface CertificationsMeta {
  subHeaderItems?: CertificationsSubHeaderTypes[];
  issuingOrganizationMapping?: IssuingOrganizationMapping[];
  offeredByMapping?: OfferedByMapping[];
  credentialTypeMapping?: CredentialTypeMapping[];
}

export const DEFAULT_CERTIFICATIONS_META: CertificationsMeta = {
  subHeaderItems: [
    'credentialType',
    'credentialId',
    'offeredBy',
    'issuingOrganization',
    'issuedDate',
    'gradeAchieved'
  ],
  offeredByMapping: [],
  issuingOrganizationMapping: [],
  credentialTypeMapping: []
};

export interface IssuingOrganizationMapping {
  key: string;
  displayName: string;
  url?: string;
}

export interface OfferedByMapping {
  key: string;
  displayName: string;
  url?: string;
}

export interface CredentialTypeMapping {
  key: string;
  displayName: string;
}

export interface CertificationItem {
  title: string;
  meta?: CertificationItemMeta;
  credentialType?: string;
  credentialId?: string;
  credentialUrl?: string;
  offeredBy?: string;
  issuingOrganization?: string;
  verificationUrl?: string;
  issuedDate?: string;
  gradeAchieved?: string;
  children?: CertificationItem[];
}

export interface CertificationItemMeta {
  show?: boolean;
}
