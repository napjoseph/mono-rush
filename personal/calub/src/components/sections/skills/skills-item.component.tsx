import React from 'react';
import { useSnapshot } from 'valtio';
import { motion } from 'framer-motion';

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
          <motion.div
            className={classes.bar}
            title={titleText}
            onClick={() => {
              !sidebar.isFirstToggleFinished && sidebar.firstToggle();
              tagFilters.update(title, TagFilterStatus.ONLY_WITH);
            }}
            initial="initial"
            animate="visible"
            whileHover="hover"
            variants={{
              initial: {
                rotate: 0,
                width: '0%',
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.5
                },
                width
              },
              hover: {
                scale: 1.02
              }
            }}
          >
            {title}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SkillsItemComponent;
