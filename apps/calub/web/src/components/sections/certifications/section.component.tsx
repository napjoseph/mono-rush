import React from 'react';

import { CertificationsConfig, DEFAULT_CERTIFICATIONS_META } from '../../../models';

import CertificationListComponent from './certification-list.component';

interface CertificationsSectionComponentProps {
  config: CertificationsConfig;
}

const CertificationsSectionComponent: React.FC<CertificationsSectionComponentProps> = ({
  config
}) => {
  const meta = config.meta || DEFAULT_CERTIFICATIONS_META;
  const items = config.items || [];

  return (
    <>
      <CertificationListComponent meta={meta} items={items} firstLevel={true} />
    </>
  );
};

export default CertificationsSectionComponent;
