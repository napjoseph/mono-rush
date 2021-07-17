import React from 'react';

import { SkillsCategory } from '../../../models';
import SkillsItemComponent from './skills-item.component';

import classes from './skills-category-item.module.scss';

interface SkillsCategoryItemComponentProps {
  category: SkillsCategory;
}

const SkillsCategoryItemComponent: React.FC<SkillsCategoryItemComponentProps> = ({ category }) => {
  const { title, items = [] } = category;
  const list = items
    .filter((item) => {
      if (!item.meta || item.meta.show === undefined) return true;

      return !!item.meta.show;
    })
    .sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title}>{title}</h3>

        {list && (
          <ul className={classes.list}>
            {list.map((item, index) => {
              return <SkillsItemComponent key={index} item={item}></SkillsItemComponent>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default SkillsCategoryItemComponent;
