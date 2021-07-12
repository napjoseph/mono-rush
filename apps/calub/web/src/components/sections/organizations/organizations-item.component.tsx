import React from 'react';

import { OrganizationsItem } from '../../../models';
import formatDate from '../../../utils/format-date';
import calculateDateDuration from '../../../utils/calculate-date-duration';

import classes from './organizations-item.module.scss';

interface OrganizationsItemComponentProps {
  item: OrganizationsItem;
}

const OrganizationsItemComponent: React.FC<OrganizationsItemComponentProps> = ({ item }) => {
  const datesPrefix = '(';
  const datesTo = ' to ';
  const datesSuffix = ')';

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title}>
          <a className={classes.link} href={item.url}>
            {item.title}
          </a>
        </h3>
        <div className={classes.roles}>
          <ul className={classes.list}>
            {item.roles.map((role, index) => {
              return (
                <li className={classes.role} key={index}>
                  <span className={classes.name}>{role.title}</span>
                  <span
                    className={classes.dates}
                    title={calculateDateDuration(role.dates.start, role.dates.end)}
                  >
                    <span className={classes.prefix}>{datesPrefix}</span>
                    <span className={classes.start}>{formatDate(role.dates.start)}</span>
                    <span className={classes.to}>{datesTo}</span>
                    <span className={classes.end}>{formatDate(role.dates.end)}</span>
                    <span className={classes.suffix}>{datesSuffix}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrganizationsItemComponent;
