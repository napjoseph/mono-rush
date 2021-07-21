import React from 'react';

import Head from 'next/head';
import { GetStaticProps } from 'next';

import TagCardList from '../../components/tags/tag-card-list.component';
import { PostTag } from '../../models';
import { getAllPostTags } from '../../lib/api/tags';
import OpenGraph from '../../components/document/metadata/open-graph.component';
import { generateSiteDescription, generateSiteTitle } from '../../lib/utils/metadata';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';

interface TagsPageProps {
  tags: PostTag[];
}

const TagsPage: React.FC<TagsPageProps> = ({ tags }) => {
  const pageTitle = 'Tags';
  const siteTitle = generateSiteTitle(pageTitle);
  const siteDescription = generateSiteDescription();

  const ogData = createOpenGraphData({
    ogTitle: siteTitle,
    ogDescription: siteDescription
  });

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Head>

      <OpenGraph data={ogData} />

      <TagCardList title={pageTitle} tags={tags} showTotal={true} hideIfEmpty={false} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const tags = getAllPostTags();

  return {
    props: {
      tags
    }
  };
};

export default TagsPage;
