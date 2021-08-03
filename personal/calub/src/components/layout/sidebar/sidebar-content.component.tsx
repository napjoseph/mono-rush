import React from 'react';
import { useSnapshot } from 'valtio';

import { tagFiltersStore } from '../../../store';
import PrintButtonComponent from '../../ui/print/print-button.component';

const SidebarContentComponent: React.FC = (_props) => {
  const tagFilters = useSnapshot(tagFiltersStore);

  if (tagFilters.included.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col flex-wrap gap-5 p-5 overflow-hidden break-words place-content-center">
      <PrintButtonComponent />
    </div>
  );
};

export default SidebarContentComponent;
