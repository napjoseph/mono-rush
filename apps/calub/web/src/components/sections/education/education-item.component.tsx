import React from 'react';

import { EducationItem } from '../../../models';

import classes from './education-item.module.scss';

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
        <h3 className={classes.title}>{item.title}</h3>
        <div className={classes.meta}>
          <span className={classes.from}>
            <a href={item.from.url}>{item.from.name}</a>
          </span>
          <span className={classes.divider}>|</span>
          <span>{item.from.address}</span>
        </div>
        <div className={classes.meta}>
          <span className={classes.dates}>
            <span className={classes.prefix}>{datesPrefix}</span>
            <span className={classes.start}>{item.dates.start}</span>
            <span className={classes.to}>{datesTo}</span>
            <span className={classes.end}>{item.dates.end}</span>
            <span className={classes.suffix}>{datesSuffix}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default EducationItemComponent;
