import React from 'react';
import { useSnapshot } from 'valtio';

import { SkillsItem, TagFilterStatus } from '../../../models';
import { sidebarToggleStore, tagFiltersStore } from '../../../store';

import classes from './skills-item.module.scss';

interface SkillsItemComponentProps {
  item: SkillsItem;
}

const SkillsItemComponent: React.FC<SkillsItemComponentProps> = ({ item }) => {
  const tagFilters = useSnapshot(tagFiltersStore);
  const sidebar = useSnapshot(sidebarToggleStore);

  const ratingMax = 10;

  const { title, rating } = item;
  const width = `${(rating / ratingMax) * 100}%`;
  const titleText = `${rating} out of ${ratingMax}`;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.progress}>
          <div
            className={classes.bar}
            style={{ width }}
            title={titleText}
            onClick={() => {
              !sidebar.isFirstToggleFinished && sidebar.firstToggle();
              tagFilters.update(title, TagFilterStatus.ONLY_WITH);
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsItemComponent;
