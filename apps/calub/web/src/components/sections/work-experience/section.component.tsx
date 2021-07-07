import React from 'react';

import { WorkExperienceItem } from '../../../models';
import CompanyItemComponent from './company-item.component';

interface WorkExperienceComponentProps {
  items?: WorkExperienceItem[];
}

const WorkExperienceComponent: React.FC<WorkExperienceComponentProps> = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => {
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
