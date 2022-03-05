import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import joinClassNames from '../../../utils/join-class-names';
import { HeaderImage } from '../../../models';

interface SelectComponentProps {
  title: string;
  choices: HeaderImage[];
  selectedIndex: number;
  isExpanded: boolean;
  toggleExpand: () => void;
  select: (index: number) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  title,
  choices = [],
  selectedIndex,
  isExpanded,
  toggleExpand,
  select
}) => {
  return (
    <>
      <div className="flex flex-col">
        <h4
          className="flex flex-row flex-1 p-1 text-xs uppercase transition duration-100 ease-in-out rounded-sm cursor-pointer hover:bg-gray-700"
          onClick={toggleExpand}
        >
          <span className="grow px-1 break-words">{title}</span>
          <span className="flex-none px-2" title="Toggle Details">
            <FontAwesomeIcon
              icon={{ prefix: 'fas', iconName: 'caret-right' }}
              className={joinClassNames(
                isExpanded ? 'rotate-90' : '',
                'transform',
                'transition-all duration-100 ease-in-out'
              )}
            />
          </span>
        </h4>

        <div
          className={joinClassNames(
            isExpanded
              ? 'flex-1 max-h-60 with-scrollbars overflow-y-auto'
              : 'flex-almost-gone max-h-0',
            'overflow-hidden',
            'rounded-lg',
            'bg-gray-900',
            'transition-all duration-100 ease-in-out'
          )}
        >
          {choices.length !== 0 && (
            <div className="flex flex-col flex-wrap gap-2 p-3">
              {choices.map((choice, index) => {
                return (
                  <motion.div
                    key={index}
                    className={joinClassNames(
                      selectedIndex === index ? 'bg-blue-700 font-semibold' : '',
                      'p-2 text-xs rounded cursor-pointer hover:bg-gray-700 transition-all duration-100 ease-in-out'
                    )}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => select(index)}
                  >
                    <span className="inline break-all align-middle" title={choice.path}>
                      {choice.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectComponent;
