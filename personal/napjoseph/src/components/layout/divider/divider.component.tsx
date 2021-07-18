import React from 'react';

import classes from './divider.module.scss';

/* eslint-disable-next-line */
interface DividerProps {}

const Divider: React.FC<DividerProps> = (_props) => {
  return (
    <div className={classes.container}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
};

export default Divider;
