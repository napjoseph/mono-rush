import React from 'react';

import { EventsItem } from '../../../models';
import formatDate from '../../../utils/format-date';

import classes from './events-item.module.scss';

interface EventsItemComponentProps {
  item: EventsItem;
}

const EventsItemComponent: React.FC<EventsItemComponentProps> = ({ item }) => {
  const datesTo = ' to ';

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title}>{item.title}</h3>
        <div className={classes.meta}>
          <span className={classes.role}>{item.role}</span>
          <span className={classes.divider}>|</span>
          <span className={classes.dates}>
            <span className={classes.start}>{formatDate(item.dates.start)}</span>
            {item.dates.end && (
              <>
                <span className={classes.to}>{datesTo}</span>
                <span className={classes.end}>{formatDate(item.dates.end)}</span>
              </>
            )}
          </span>
          <span className={classes.divider}>|</span>
          <span>{item.address}</span>
        </div>
        <div className={classes.meta}></div>
      </div>
    </>
  );
};

export default EventsItemComponent;
