import React from 'react';
import { useSnapshot } from 'valtio';

import { tagFiltersStore } from '../../../store';
import PrintButtonComponent from '../../ui/print/print-button.component';

const SidebarContentComponent: React.FC = (_props) => {
  const tagFilters = useSnapshot(tagFiltersStore);

  return (
    <div className="flex flex-col flex-wrap gap-5 p-5 break-words place-content-center">
      <PrintButtonComponent />
      <div className="flex flex-col gap-1 text-sm">
        <h3 className="font-semibold uppercase">Tags</h3>
        <ul className="flex flex-col gap-1 list-inside list-square">
          <h4>Available:</h4>
          {tagFilters.unusedTags.map((tag, index) => {
            return (
              <li key={index} className="ml-3">
                {tag}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-1 list-inside list-square">
          <h4>Only With:</h4>
          {tagFilters.onlyWithTags.map((tag, index) => {
            return (
              <li key={index} className="ml-3">
                {tag}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-1 list-inside list-square">
          <h4>Must Not Have:</h4>
          {tagFilters.mustNotHaveTags.map((tag, index) => {
            return (
              <li key={index} className="ml-3">
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarContentComponent;
