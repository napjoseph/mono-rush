import React from 'react';
import { useSnapshot } from 'valtio';

import { sidebarContentStore } from '../../../store';
import FiltersSection from '../../filters/section.component';
import PrintButtonComponent from '../../ui/print/print-button.component';

const SidebarContentComponent: React.FC = (_props) => {
  const sidebarContent = useSnapshot(sidebarContentStore);

  return (
    <div className="flex flex-col flex-wrap gap-5 p-5 break-words place-content-center">
      <PrintButtonComponent />

      {sidebarContent.sections.map((section, index) => {
        return <FiltersSection key={index} section={section} />;
      })}
    </div>
  );
};

export default SidebarContentComponent;
