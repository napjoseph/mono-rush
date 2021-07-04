import React from 'react';

import classes from './index.module.scss';

/* eslint-disable-next-line */
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (_props) => {
  return (
    <>
      <h1 className={classes.title}>Home Page</h1>
    </>
  );
};

export default HomePage;
