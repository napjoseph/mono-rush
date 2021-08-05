import React from 'react';
import { useSnapshot } from 'valtio';
import { motion } from 'framer-motion';

import { SkillsItem, TagFilterStatus } from '../../../models';
import { sidebarToggleStore, tagFiltersStore } from '../../../store';

interface SkillsItemBarComponentProps {
  item: SkillsItem;
}

const SkillsItemBarComponent: React.FC<SkillsItemBarComponentProps> = ({ item }) => {
  const tagFilters = useSnapshot(tagFiltersStore);
  const sidebar = useSnapshot(sidebarToggleStore);

  const ratingMax = 10;

  const { title, rating } = item;
  const width = `${(rating / ratingMax) * 100}%`;
  const titleText = `${rating} out of ${ratingMax}`;

  return (
    <>
      <div className="w-full mb-2 bg-gray-300 shadow rounded-xl">
        <motion.div
          className="py-1 pl-3 overflow-hidden text-xs leading-none text-left text-white break-words bg-blue-600 cursor-pointer rounded-xl"
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
    </>
  );
};

export default SkillsItemBarComponent;
