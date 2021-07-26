import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Article, ArticleTag } from '../../models';
import { getArticleTags, getArticleTagBySlug } from '../../lib/api/tags';
import {
  createHeadData,
  generateSiteDescription,
  generateSiteTitle
} from '../../lib/utils/head-data';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';
import DynamicHead from '../../components/document/dynamic-head.component';
import OpenGraph from '../../components/document/open-graph.component';
import ArticleCardList from '../../components/articles/article-card-list.component';
import { getArticlesByTagSlug } from '../../lib/api/articles';

interface TagPageProps {
  tag?: ArticleTag;
  articles?: Article[];
}

const TagPage: React.FC<TagPageProps> = ({ tag, articles }) => {
  if (!tag) return null;

  const pageTitle = `Posts with the "${tag.name}" tag`;
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

      <ArticleCardList title={pageTitle} showTotal={true} articles={articles} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug.toString();
  const tag = await getArticleTagBySlug('posts', slug);
  const articles = await getArticlesByTagSlug('posts', slug);

  return {
    props: {
      tag,
      articles
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getArticleTags('posts');

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: tag.slug
        }
      };
    }),
    fallback: false
  };
};

export default TagPage;
