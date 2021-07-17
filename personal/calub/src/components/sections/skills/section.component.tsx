import React from 'react';

import { SkillsConfig } from '../../../models';
import SkillsCategoryItemComponent from './skills-category-item.component';

import classes from './section.module.scss';

interface SkillsSectionComponentProps {
  config: SkillsConfig;
}

const SkillsSectionComponent: React.FC<SkillsSectionComponentProps> = ({ config }) => {
  const { items = [] } = config;
  if (!items) return null;

  const list = items.filter((item) => {
    if (!item.meta || item.meta.show === undefined) return true;

    return !!item.meta.show;
  });

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <SkillsCategoryItemComponent category={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsSectionComponent;
