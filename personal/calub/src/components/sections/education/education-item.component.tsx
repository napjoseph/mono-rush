import React from 'react';

import { EducationItem } from '../../../models';
import formatDate from '../../../utils/format-date';

interface EducationItemComponentProps {
  item: EducationItem;
}

const EducationItemComponent: React.FC<EducationItemComponentProps> = ({ item }) => {
  const datesPrefix = '';
  const datesTo = ' to ';
  const datesSuffix = '';

  return (
    <>
      <div>
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <div className="text-gray-500 text-xs">
          <span className="font-semibold">
            <a className="color-link" href={item.from.url}>
              {item.from.name}
            </a>
          </span>
          <span className="mx-1">|</span>
          <span>{item.from.address}</span>
        </div>
        <div className="text-gray-500 text-xs">
          <span>
            <span>{datesPrefix}</span>
            <span>{formatDate(item.dates.start)}</span>
            <span>{datesTo}</span>
            <span>{formatDate(item.dates.end)}</span>
            <span>{datesSuffix}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default EducationItemComponent;
