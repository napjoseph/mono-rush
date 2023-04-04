import React from 'react';

import Head from 'next/head';

/* eslint-disable @next/next/no-page-custom-font */
const StaticHead: React.FC = (_props) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=optional"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};
/* eslint-enable @next/next/no-page-custom-font */

export default StaticHead;
