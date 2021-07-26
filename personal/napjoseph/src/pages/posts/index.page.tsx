import React from 'react';
import { GetStaticProps } from 'next';

import { Article } from '../../models';
import {
  createHeadData,
  generateSiteDescription,
  generateSiteTitle
} from '../../lib/utils/head-data';
import DynamicHead from '../../components/document/dynamic-head.component';
import OpenGraph from '../../components/document/open-graph.component';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';
import ArticleCardList from '../../components/articles/article-card-list.component';
import { getArticles } from '../../lib/api/articles';

interface PostsPageProps {
  articles?: Article[];
}

const PostsPage: React.FC<PostsPageProps> = ({ articles }) => {
  const pageTitle = 'Posts';
  const siteTitle = generateSiteTitle(pageTitle);
  const siteDescription = generateSiteDescription();

  const headData = createHeadData({
    title: siteTitle,
    description: siteDescription
  });

  const ogData = createOpenGraphData({
    ogTitle: siteTitle,
    ogDescription: siteDescription
  });

  return (
    <>
      <DynamicHead data={headData} />
      <OpenGraph data={ogData} />

      <ArticleCardList title={pageTitle} articles={articles} showTotal={true} hideIfEmpty={false} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const posts = await getArticles('posts');

  return {
    props: {
      articles: posts || []
    }
  };
};

export default PostsPage;
