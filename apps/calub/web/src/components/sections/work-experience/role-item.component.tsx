import React from 'react';

import { WorkExperienceRole } from '../../../models';

import classes from './role-item.module.scss';

interface RoleItemComponentProps {
  item: WorkExperienceRole;
}

const RoleItemComponent: React.FC<RoleItemComponentProps> = ({ item }) => {
  const { title, canadaClassification, startDate, endDate, description } = item;

  return (
    <>
      <h6 className={classes.title} title={title}>
        {canadaClassification || title}
      </h6>
      <p className={classes.dates}>
        <span className={classes.start}>{startDate}</span>–
        <span className={classes.end}>{endDate}</span>
      </p>
      <p className={classes.description}>{description}</p>
    </>
  );
};

export default RoleItemComponent;
