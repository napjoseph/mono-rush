import React from 'react';

import { WorkExperienceRole } from '../../../models';
import formatDate from '../../../utils/format-date';
import calculateDateDuration from '../../../utils/calculate-date-duration';

import classes from './role-item.module.scss';

interface RoleItemComponentProps {
  item: WorkExperienceRole;
}

const RoleItemComponent: React.FC<RoleItemComponentProps> = ({ item }) => {
  const { title, canadaClassification, startDate, endDate, description } = item;

  return (
    <div className={classes.container}>
      <h4 className={classes.title} title={title}>
        {title}
      </h4>
      <div>
        {canadaClassification && (
          <div className={classes.canadaClassification}>{canadaClassification}</div>
        )}
        <div className={classes.dates} title={calculateDateDuration(startDate, endDate)}>
          <span className={classes.start}>{formatDate(startDate)}</span>–
          <span className={classes.end}>{formatDate(endDate)}</span>
        </div>
      </div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

export default RoleItemComponent;
