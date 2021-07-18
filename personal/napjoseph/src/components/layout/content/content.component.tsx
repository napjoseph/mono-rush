import React from 'react';

import classes from './content.module.scss';

/* eslint-disable-next-line */
interface ContentProps {}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <main className={classes.container}>{children}</main>;
};

export default Content;
