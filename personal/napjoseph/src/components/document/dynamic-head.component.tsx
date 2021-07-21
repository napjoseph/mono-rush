import React from 'react';

import Head from 'next/head';

import { HeadData } from '../../models';

interface DynamicHeadProps {
  data?: HeadData;
}

const DynamicHead: React.FC<DynamicHeadProps> = ({ data }) => {
  const { charSet, title, description, keywords, author, viewport } = data || {};

  // Make the description shorter (around 150-160).
  const maxDescriptionLength = 160;
  const shorterDescription =
    (description || '').length > maxDescriptionLength
      ? `${description.substring(0, maxDescriptionLength)}...`
      : description;

  return (
    <>
      <Head>
        {charSet && <meta charSet={charSet} />}

        {title && <title>{title}</title>}

        {addMetaTag('description', shorterDescription)}
        {addMetaTag('keywords', keywords)}
        {addMetaTag('author', author)}
        {addMetaTag('viewport', viewport)}
      </Head>
    </>
  );
};

const addMetaTag = (property: string, content?: string, overwrite = true): JSX.Element => {
  if (content === undefined || content === null || content === '') {
    return null;
  }

  if (typeof content === 'string') {
    return <meta property={property} content={content} key={overwrite ? property : undefined} />;
  }

  return null;
};

export default DynamicHead;
