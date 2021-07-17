import React from 'react';

import classes from './index.module.scss';

/* eslint-disable-next-line */
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (_props) => {
  return <div className={classes.container}>Hello</div>;
};

export default HomePage;
