import React from 'react';

import { WorkExperienceConfig } from '../../../models';
import CompanyItemComponent from './company-item.component';

interface WorkExperienceComponentProps {
  config: WorkExperienceConfig;
}

const WorkExperienceComponent: React.FC<WorkExperienceComponentProps> = ({ config }) => {
  const { items = [] } = config;

  return (
    <>
      <ul>
        {items
          .filter((item) => {
            if (!item.meta || item.meta.show === undefined) return true;

            return !!item.meta.show;
          })
          .map((item, index) => {
            return (
              <li key={item.title}>
                <CompanyItemComponent item={item} isLast={index === items.length - 1} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default WorkExperienceComponent;
