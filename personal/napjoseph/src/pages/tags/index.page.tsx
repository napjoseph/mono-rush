import React from 'react';
import { GetStaticProps } from 'next';

import TagCardList from '../../components/tags/tag-card-list.component';
import { ArticleTag } from '../../models';
import { getArticleTags } from '../../lib/api/tags';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';
import { createHeadData, generateSiteTitle } from '../../lib/utils/head-data';
import { generateSiteUrl } from '../../lib/utils/site-url';
import OpenGraph from '../../components/document/open-graph.component';
import DynamicHead from '../../components/document/dynamic-head.component';

interface TagsPageProps {
  tags: ArticleTag[];
}

const TagsPage: React.FC<TagsPageProps> = ({ tags }) => {
  const pageTitle = 'Tags';
  const siteTitle = generateSiteTitle(pageTitle);
  const siteDescription = 'A list of tags for all of my blog posts';
  const siteUrl = generateSiteUrl();

  const headData = createHeadData({
    title: siteTitle,
    description: siteDescription
  });

  const ogData = createOpenGraphData({
    ogTitle: siteTitle,
    ogDescription: siteDescription,
    ogUrl: `${siteUrl}tags/`
  });

  return (
    <>
      <DynamicHead data={headData} />
      <OpenGraph data={ogData} />

      <TagCardList title={pageTitle} tags={tags} showTotal={true} hideIfEmpty={false} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const tags = await getArticleTags('posts');

  return {
    props: {
      tags
    }
  };
};

export default TagsPage;
