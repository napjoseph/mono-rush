import React from 'react';
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

  const headData = createHeadData({
    title: siteTitle,
    description: siteDescription
  });

  const ogData = createOpenGraphData({
    ogTitle: siteTitle,
    ogDescription: siteDescription,
    ogType: 'article'
  });

  return (
    <>
      <DynamicHead data={headData} />
      <OpenGraph data={ogData} />

      <div className="flex flex-col gap-12">
        <article className="text-gray-700 flex flex-col gap-8">
          <ArticleHeader article={article} />
          <ArticleBody article={article} />
        </article>

        <div>
          <ArticleComments article={article} />
        </div>
      </div>
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
