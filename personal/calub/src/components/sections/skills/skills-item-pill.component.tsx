import React from 'react';
import { useSnapshot } from 'valtio';
import { motion } from 'framer-motion';

import { SkillsItem, TagFilterStatus } from '../../../models';
import { sidebarToggleStore, tagFiltersStore } from '../../../store';

interface SkillsItemPillComponentProps {
  item: SkillsItem;
  showFamiliarity?: boolean;
}

const SkillsItemPillComponent: React.FC<SkillsItemPillComponentProps> = ({
  item,
  showFamiliarity = true
}) => {
  const tagFilters = useSnapshot(tagFiltersStore);
  const sidebar = useSnapshot(sidebarToggleStore);

  const ratingMax = 10;

  const { title, rating } = item;
  const titleText = `${rating}/${ratingMax}`;

  return (
    <>
      <motion.div
        className="px-3 py-1 overflow-hidden text-xs leading-none text-left text-white break-words bg-blue-600 cursor-pointer rounded-xl"
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
            translateY: '-20%',
            opacity: 0
          },
          visible: {
            opacity: 1,
            translateY: '0%',
            transition: {
              duration: 0.5
            }
          },
          hover: {
            scale: 1.02
          }
        }}
      >
        {title}
        {showFamiliarity ? <> &ndash; {titleText}</> : null}
      </motion.div>
    </>
  );
};

export default SkillsItemPillComponent;
