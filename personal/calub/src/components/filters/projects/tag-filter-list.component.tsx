import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TagFilterItem from './tag-filter-item.component';
import joinClassNames from '../../../utils/join-class-names';
import { TagFilterType } from '../../../store';

interface TagFilterListProps {
  title: string;
  tags: string[];
  isExpanded: boolean;
  toggleExpand: () => void;
  ofType: TagFilterType;
}

const TagFilterList: React.FC<TagFilterListProps> = ({
  title,
  tags,
  isExpanded,
  toggleExpand,
  ofType
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
                '',
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
          {tags.length !== 0 && (
            <div className="flex flex-wrap gap-2 p-3">
              {tags.map((tag, index) => {
                return (
                  <TagFilterItem
                    key={index}
                    title={tag}
                    {...{
                      showRemoveButton: ofType !== TagFilterType.AVAILABLE,
                      showIncludeButton: ofType !== TagFilterType.INCLUDED,
                      showExcludeButton: ofType !== TagFilterType.EXCLUDED
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TagFilterList;
