import React from 'react';

import classes from './total-results.module.scss';

/* eslint-disable-next-line */
interface TotalResultsProps {
  total: number;
  unit?: string;
  unitPlural?: string;
}

const TotalResults: React.FC<TotalResultsProps> = ({ total = 0, unit = 'item', unitPlural }) => {
  const plural = !unitPlural ? `${unit}s` : unitPlural;

  return (
    <div className={classes.container}>
      Showing a total of <span className={classes.total}>{total}</span>{' '}
      {total === 0 || total > 1 ? plural : unit}.
    </div>
  );
};

export default TotalResults;
