import React from 'react';

import { EventsConfig } from '../../../models';
import EventsItemComponent from './events-item.component';

import classes from './section.module.scss';

interface EventsSectionComponentProps {
  config: EventsConfig;
}

const EventsSectionComponent: React.FC<EventsSectionComponentProps> = ({ config }) => {
  const { items } = config;

  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
          {items.map((item, index) => {
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
