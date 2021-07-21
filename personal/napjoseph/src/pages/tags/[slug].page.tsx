import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import { Post, PostTag } from '../../models';
import { getAllPostsByTagSlug } from '../../lib/api/posts';
import PostCardList from '../../components/posts/post-card-list.component';
import { getAllPostTags, getTagBySlug } from '../../lib/api/tags';
import {
  createHeadData,
  generateSiteDescription,
  generateSiteTitle
} from '../../lib/utils/head-data';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';
import DynamicHead from '../../components/document/dynamic-head.component';
import OpenGraph from '../../components/document/open-graph.component';

interface TagPageProps {
  tag?: PostTag;
  posts?: Post[];
}

const TagPage: React.FC<TagPageProps> = ({ tag, posts }) => {
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

      <PostCardList title={pageTitle} showTotal={true} posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params.slug.toString();
  const tag = getTagBySlug(slug);
  const posts = getAllPostsByTagSlug(slug);

  return {
    props: {
      tag,
      posts
    }
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getAllPostTags();

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
