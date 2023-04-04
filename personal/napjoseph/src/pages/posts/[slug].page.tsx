import React from 'react';
import { Flex } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Article } from '../../models';
import { getArticles, getArticleBySlug } from '../../lib/api/articles';
import ArticleBody from '../../components/articles/article-body.component';
import ArticleHeader from '../../components/articles/article-header.component';
import ArticleComments from '../../components/articles/article-comments.component';
import {
  createHeadData,
  generateSiteDescription,
  generateSiteTitle
} from '../../lib/utils/head-data';
import { generateSiteUrl } from '../../lib/utils/site-url';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';
import DynamicHead from '../../components/document/dynamic-head.component';
import OpenGraph from '../../components/document/open-graph.component';

interface ArticlePageProps {
  article?: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  if (!article) return null;

  const pageTitle = article.title;
  const siteTitle = generateSiteTitle(pageTitle);
  const siteDescription = generateSiteDescription(article.excerpt);
  const siteUrl = generateSiteUrl();

  const headData = createHeadData({
    title: siteTitle,
    description: siteDescription
  });

  const ogData = createOpenGraphData({
    ogTitle: siteTitle,
    ogDescription: siteDescription,
    ogType: 'article',
    ogUrl: `${siteUrl}posts/${article.slug}`
  });

  return (
    <>
      <DynamicHead data={headData} />
      <OpenGraph data={ogData} />

      <Flex direction="column" gridGap={12}>
        <Flex as="article" direction="column" gridGap={8}>
          <ArticleHeader article={article} />
          <ArticleBody article={article} />
        </Flex>

        <ArticleComments article={article} />
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getArticleBySlug('posts', params.slug.toString());

  return {
    props: {
      article
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles('posts');

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug
        }
      };
    }),
    fallback: false
  };
};

export default ArticlePage;
