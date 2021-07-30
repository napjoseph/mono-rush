import React from 'react';

import { EducationConfig } from '../../../models';
import EducationItemComponent from './education-item.component';

interface EducationSectionComponentProps {
  config: EducationConfig;
}

const EducationSectionComponent: React.FC<EducationSectionComponentProps> = ({ config }) => {
  const { items } = config;

  return (
    <>
      <div className="text-sm text-gray-700">
        <ul className="list-square ml-4">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <EducationItemComponent item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default EducationSectionComponent;
