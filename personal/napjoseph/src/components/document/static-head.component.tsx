import React from 'react';

import Head from 'next/head';

/* eslint-disable @next/next/no-page-custom-font */
const StaticHead: React.FC = (_props) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inte&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};
/* eslint-enable @next/next/no-page-custom-font */

export default StaticHead;
