import React from 'react';

import { WorkExperienceConfig } from '../../../models';
import CompanyItemComponent from './company-item.component';

import classes from './section.module.scss';

interface WorkExperienceComponentProps {
  config: WorkExperienceConfig;
}

const WorkExperienceComponent: React.FC<WorkExperienceComponentProps> = ({ config }) => {
  const { items = [] } = config;

  return (
    <>
      <ul className={classes.list}>
        {items
          .filter((item) => {
            if (!item.meta || item.meta.show === undefined) return true;

            return !!item.meta.show;
          })
          .map((item, index, list) => {
            return (
              <li key={item.title}>
                <CompanyItemComponent item={item} isLast={index === list.length - 1} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default WorkExperienceComponent;
