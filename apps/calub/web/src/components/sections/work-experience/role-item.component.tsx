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
    <>
      <h4 className={classes.title} title={title}>
        {canadaClassification || title}
      </h4>
      <p className={classes.dates} title={calculateDateDuration(startDate, endDate)}>
        <span className={classes.start}>{formatDate(startDate)}</span>–
        <span className={classes.end}>{formatDate(endDate)}</span>
      </p>
      <p className={classes.description}>{description}</p>
    </>
  );
};

export default RoleItemComponent;
