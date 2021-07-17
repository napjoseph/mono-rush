import React from 'react';

import { EventsConfig } from '../../../models';
import EventsItemComponent from './events-item.component';

import classes from './section.module.scss';

interface EventsSectionComponentProps {
  config: EventsConfig;
}

const EventsSectionComponent: React.FC<EventsSectionComponentProps> = ({ config }) => {
  const { items } = config;
  const sorted = items.sort((a, b) => {
    if (a.dates.start > b.dates.start) {
      return -1;
    }
    if (a.dates.start < b.dates.start) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
          {sorted.map((item, index) => {
            return (
              <li key={index}>
                <EventsItemComponent item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default EventsSectionComponent;
