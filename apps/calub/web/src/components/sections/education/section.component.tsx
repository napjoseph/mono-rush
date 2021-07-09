import React from 'react';

import { EducationConfig } from '../../../models';
import EducationItemComponent from './education-item.component';

import classes from './section.module.scss';

interface EducationSectionComponentProps {
  config: EducationConfig;
}

const EducationSectionComponent: React.FC<EducationSectionComponentProps> = ({ config }) => {
  const { items } = config;

  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
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
