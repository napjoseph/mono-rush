export interface CertificationItem {
  title: string;
  credential_type?: 'professional_certificate';
  credential_id?: string;
  issuing_organization?: string;
  verification_url?: string;
  issued_date?: string;
  grade_achieved?: string;
  children?: CertificationItem[];
}
