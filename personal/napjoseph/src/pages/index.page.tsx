import React from 'react';
import { GetStaticProps } from 'next';

import { Article } from '../models';
import { createHeadData, generateSiteDescription, generateSiteTitle } from '../lib/utils/head-data';
import { createOpenGraphData } from '../lib/utils/open-graph-data';
import OpenGraph from '../components/document/open-graph.component';
import DynamicHead from '../components/document/dynamic-head.component';
import { getArticles } from '../lib/api/articles';
import ArticleCardList from '../components/articles/article-card-list.component';

interface HomePageProps {
  articles?: Article[];
}

const HomePage: React.FC<HomePageProps> = ({ articles = [] }) => {
  const siteTitle = generateSiteTitle();
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

      <ArticleCardList title="Recent Posts" articles={articles} hideIfEmpty={false} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const posts = await getArticles('posts');

  return {
    props: {
      articles: (posts || []).slice(0, 3)
    }
  };
};

export default HomePage;
