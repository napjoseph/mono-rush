import React from 'react';

import { SkillsItem } from '../../../models';

import classes from './skills-item.module.scss';

interface SkillsItemComponentProps {
  item: SkillsItem;
}

const SkillsItemComponent: React.FC<SkillsItemComponentProps> = ({ item }) => {
  const ratingMax = 10;

  const { title, rating } = item;
  const width = `${(rating / ratingMax) * 100}%`;
  const titleText = `${rating} out of ${ratingMax}`;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.progress}>
          <div className={classes.bar} style={{ width }} title={titleText}>
            {title}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsItemComponent;
