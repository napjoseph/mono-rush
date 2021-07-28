import React from 'react';

import Head from 'next/head';

interface StaticHeadProps {
  crossOrigin?: string;
}

/* eslint-disable @next/next/no-page-custom-font */
const StaticHead: React.FC<StaticHeadProps> = ({ crossOrigin = 'anonymous' }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={crossOrigin} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Inter&family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};
/* eslint-enable */

export default StaticHead;
