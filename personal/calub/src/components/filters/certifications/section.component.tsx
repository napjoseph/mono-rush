import React from 'react';
import { useSnapshot } from 'valtio';

import { certificationsFiltersStore } from '../../../store/filters/certifications';
import ToggleComponent from '../../ui/toggle/toggle.component';

const CertificationsFiltersSection: React.FC = (_props) => {
  const certificationsFilters = useSnapshot(certificationsFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={certificationsFilters.showSection}
        toggle={certificationsFilters.toggleSection}
      />
    </>
  );
};

export default CertificationsFiltersSection;
