import React from 'react';

import { OrganizationsConfig } from '../../../models';
import OrganizationsItemComponent from './organizations-item.component';

import classes from './section.module.scss';

interface OrganizationsSectionComponentProps {
  config: OrganizationsConfig;
}

const OrganizationsSectionComponent: React.FC<OrganizationsSectionComponentProps> = ({
  config
}) => {
  const { items } = config;

  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
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
