import React from 'react';
import { useSnapshot } from 'valtio';

import { tagFiltersStore } from '../../../store';

const SidebarContentComponent: React.FC = (_props) => {
  const tagFilters = useSnapshot(tagFiltersStore);

  if (tagFilters.included.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex items-stretch p-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Tags Selected</h3>
          <ul className="flex flex-col gap-1 list-inside list-square">
            {tagFilters.included.map((tag) => {
              return (
                <li
                  key="tag"
                  className="ml-3 cursor-pointer hover:font-medium"
                  onClick={() => tagFilters.remove(tag)}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarContentComponent;
