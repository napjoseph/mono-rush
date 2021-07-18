import React from 'react';

import Head from 'next/head';

/* eslint-disable-next-line */
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (_props) => {
  return (
    <>
      <Head>
        <title>Nap Joseph Calub</title>
      </Head>
      <div>This is the home page.</div>
    </>
  );
};

export default HomePage;
