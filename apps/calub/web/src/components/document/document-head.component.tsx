import React from 'react';

import Head from 'next/head';

/* eslint-disable-next-line */
interface DocumentHeadProps {}

const DocumentHead: React.FC<DocumentHeadProps> = (_props) => {
  // For some reason, `import getConfig from 'next/config'` is not exposing the correct
  // environment variables to this component.
  // Using the NEXT_PUBLIC_* version instead.
  const basePath = process.env.NEXT_PUBLIC_BASEPATH;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Nap Joseph Calub</title>

        <meta name="description" content="Curriculum Vitae of Nap Joseph Calub." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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

export default DocumentHead;
