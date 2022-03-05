import React from 'react';
import Head from 'next/head';

import getPublicBasepath from '../../utils/get-public-base-path';

/* eslint-disable @next/next/no-page-custom-font */
const StaticHead: React.FC = (_props) => {
  const basePath = getPublicBasepath();

  return (
    <>
      <Head>
        {/* See https://developers.google.com/web/fundamentals/web-app-manifest/ */}
        <link rel="manifest" href={basePath + '/manifest.json'} />

        <link rel="apple-touch-icon" href={basePath + '/apple-touch-icon.png'} />
        <link rel="icon" type="image/png" sizes="32x32" href={basePath + '/favicon-32x32.png'} />
        <link rel="icon" type="image/png" sizes="16x16" href={basePath + '/favicon-16x16.png'} />
        <link rel="icon" type="image/x-icon" href={basePath + '/favicon.ico'} />

        <link rel="author" href={basePath + '/humans.txt'} />

        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
};
/* eslint-enable @next/next/no-page-custom-font */

export default StaticHead;
