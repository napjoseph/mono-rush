import React from 'react';

import classes from './content-wrapper.module.scss';

/* eslint-disable-next-line */
interface ContentWrapperProps {}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default ContentWrapper;
