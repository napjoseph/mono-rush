import React from 'react';

import TagFiltersSection from '../../filters/tags/section.component';
import PrintButtonComponent from '../../ui/print/print-button.component';

const SidebarContentComponent: React.FC = (_props) => {
  return (
    <div className="flex flex-col flex-wrap gap-5 p-5 break-words place-content-center">
      <PrintButtonComponent />

      <TagFiltersSection />
    </div>
  );
};

export default SidebarContentComponent;
