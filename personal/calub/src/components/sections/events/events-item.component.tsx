import React from 'react';

import { EventsItem } from '../../../models';
import formatDate from '../../../utils/format-date';

interface EventsItemComponentProps {
  item: EventsItem;
}

const EventsItemComponent: React.FC<EventsItemComponentProps> = ({ item }) => {
  const datesTo = ' to ';

  return (
    <>
      <div className="pb-1">
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <div className="text-xs text-gray-500">
          <span className="italic">{item.role}</span>
          <span className="mx-1">|</span>
          <span>
            <span>{formatDate(item.dates.start)}</span>
            {item.dates.end && (
              <>
                <span>{datesTo}</span>
                <span>{formatDate(item.dates.end)}</span>
              </>
            )}
          </span>
          <span className="mx-1">|</span>
          <span>{item.address}</span>
        </div>
      </div>
    </>
  );
};

export default EventsItemComponent;
