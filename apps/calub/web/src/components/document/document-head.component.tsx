import React from 'react';

import Head from 'next/head';

/* eslint-disable-next-line */
interface DocumentHeadProps {}

const DocumentHead: React.FC<DocumentHeadProps> = (_props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>calub-web</title>

        <meta name="description" content="starter template for nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
};

export default DocumentHead;
