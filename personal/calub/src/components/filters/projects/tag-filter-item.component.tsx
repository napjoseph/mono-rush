import React from 'react';
import { useSnapshot } from 'valtio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import { projectsFiltersStore } from '../../../store';
import { TagFilterStatus } from '../../../models';

interface TagFilterItemProps {
  title: string;
  showRemoveButton?: boolean;
  showIncludeButton?: boolean;
  showExcludeButton?: boolean;
}

const TagFilterItem: React.FC<TagFilterItemProps> = ({
  title,
  showRemoveButton = false,
  showIncludeButton = false,
  showExcludeButton = false
}) => {
  const tagFilters = useSnapshot(projectsFiltersStore);

  return (
    <>
      <motion.div
        className="flex items-center gap-1 px-3 py-1 text-xs text-center text-gray-100 bg-blue-700 rounded-xl"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex items-center">
          {showRemoveButton && (
            <span title="Remove Filter">
              <FontAwesomeIcon
                className="text-red-400 cursor-pointer hover:text-red-500"
                icon={{ prefix: 'fas', iconName: 'times-circle' }}
                fixedWidth
                onClick={() => tagFilters.update(title, TagFilterStatus.DEFAULT)}
              />
            </span>
          )}
          {showIncludeButton && (
            <span title='Add to "Only With" List'>
              <FontAwesomeIcon
                className="text-green-400 cursor-pointer hover:text-green-500"
                icon={{ prefix: 'fas', iconName: 'plus-circle' }}
                fixedWidth
                onClick={() => tagFilters.update(title, TagFilterStatus.ONLY_WITH)}
              />
            </span>
          )}
          {showExcludeButton && (
            <span title='Add to "Must Not Have" List'>
              <FontAwesomeIcon
                className="text-yellow-400 cursor-pointer hover:text-yellow-500"
                icon={{ prefix: 'fas', iconName: 'minus-circle' }}
                fixedWidth
                onClick={() => tagFilters.update(title, TagFilterStatus.MUST_NOT_HAVE)}
              />
            </span>
          )}
        </div>
        <span>{title}</span>
      </motion.div>
    </>
  );
};

export default TagFilterItem;
