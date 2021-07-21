import React from 'react';

import Head from 'next/head';

import { OpenGraphData } from '../../models/open-graph/open-graph-data';

// See description from: https://ogp.me/

interface OpenGraphProps {
  data?: OpenGraphData;
}

const OpenGraph: React.FC<OpenGraphProps> = ({ data }) => {
  // NOTE: We're not iterating the properties since I want to display the tags in a specific order.
  const {
    ogTitle,
    ogDescription,
    ogType,
    ogArticleAuthor,
    ogArticleExpirationTime,
    ogArticleModifiedTime,
    ogArticlePublishedTime,
    ogArticleSection,
    ogArticleTag,
    ogAudio,
    ogAudioSecureUrl,
    ogAudioType,
    ogBookAuthor,
    ogBookIsbn,
    ogBookReleaseDate,
    ogBookTag,
    ogDeterminer,
    ogImage,
    ogImageAlt,
    ogImageHeight,
    ogImageSecureUrl,
    ogImageType,
    ogImageUrl,
    ogImageWidth,
    ogLocale,
    ogLocaleAlternate,
    ogProfileFirstName,
    ogProfileGender,
    ogProfileLastName,
    ogProfileUsername,
    ogSiteName,
    ogUrl,
    ogVideo,
    ogVideoActor,
    ogVideoActorRole,
    ogVideoDirector,
    ogVideoDuration,
    ogVideoHeight,
    ogVideoReleaseDate,
    ogVideoSecureUrl,
    ogVideoSeries,
    ogVideoTag,
    ogVideoType,
    ogVideoUrl,
    ogVideoWidth,
    ogVideoWriter
  } = data || {};

  return (
    <>
      <Head>
        {addTag('og:title', ogTitle)}
        {addTag('og:description', ogDescription)}
        {addTag('og:type', ogType)}

        {addTag('og:article:author', ogArticleAuthor)}
        {addTag('og:article:expiration_time', ogArticleExpirationTime)}
        {addTag('og:article:modified_time', ogArticleModifiedTime)}
        {addTag('og:article:published_time', ogArticlePublishedTime)}
        {addTag('og:article:section', ogArticleSection)}
        {addTag('og:article:tag', ogArticleTag)}

        {addTag('og:audio', ogAudio)}
        {addTag('og:audio:secure_url', ogAudioSecureUrl)}
        {addTag('og:audio:type', ogAudioType)}

        {addTag('og:book:author', ogBookAuthor)}
        {addTag('og:book:isbn', ogBookIsbn)}
        {addTag('og:book:release_date', ogBookReleaseDate)}
        {addTag('og:book:tag', ogBookTag)}

        {addTag('og:determiner', ogDeterminer)}

        {addTag('og:image', ogImage)}
        {addTag('og:image:alt', ogImageAlt)}
        {addTag('og:image:height', ogImageHeight)}
        {addTag('og:image:secure_url', ogImageSecureUrl)}
        {addTag('og:image:type', ogImageType)}
        {addTag('og:image:url', ogImageUrl)}
        {addTag('og:image:width', ogImageWidth)}

        {addTag('og:locale', ogLocale)}
        {addTag('og:locale:alternate', ogLocaleAlternate)}

        {addTag('og:profile:first_name', ogProfileFirstName)}
        {addTag('og:profile:gender', ogProfileGender)}
        {addTag('og:profile:last_name', ogProfileLastName)}
        {addTag('og:profile:username', ogProfileUsername)}

        {addTag('og:site_name', ogSiteName)}

        {addTag('og:url', ogUrl)}

        {addTag('og:video', ogVideo)}
        {addTag('og:video:actor', ogVideoActor)}
        {addTag('og:video:actor:role', ogVideoActorRole)}
        {addTag('og:video:director', ogVideoDirector)}
        {addTag('og:video:duration', ogVideoDuration)}
        {addTag('og:video:height', ogVideoHeight)}
        {addTag('og:video:release_date', ogVideoReleaseDate)}
        {addTag('og:video:secure_url', ogVideoSecureUrl)}
        {addTag('og:video:series', ogVideoSeries)}
        {addTag('og:video:tag', ogVideoTag)}
        {addTag('og:video:type', ogVideoType)}
        {addTag('og:video:url', ogVideoUrl)}
        {addTag('og:video:width', ogVideoWidth)}
        {addTag('og:video:writer', ogVideoWriter)}
      </Head>
    </>
  );
};

const addTag = (property: string, content?: string | string[], overwrite = false): JSX.Element => {
  if (content === undefined || content === null) {
    return null;
  }

  if (typeof content === 'string') {
    return <meta property={property} content={content} key={overwrite ? property : undefined} />;
  }

  if (Array.isArray(content)) {
    const unique = Array.from(new Set(content));

    return (
      <>
        {unique.map((value, index) => (
          <meta key={`${property}-${index}`} property={property} content={value} />
        ))}
      </>
    );
  }

  return null;
};

export default OpenGraph;
