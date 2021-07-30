import React from 'react';

import { OrganizationsConfig } from '../../../models';
import OrganizationsItemComponent from './organizations-item.component';

interface OrganizationsSectionComponentProps {
  config: OrganizationsConfig;
}

const OrganizationsSectionComponent: React.FC<OrganizationsSectionComponentProps> = ({
  config
}) => {
  const { items } = config;

  return (
    <>
      <div className="text-sm text-gray-700">
        <ul className="list-square ml-4">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <OrganizationsItemComponent item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default OrganizationsSectionComponent;
