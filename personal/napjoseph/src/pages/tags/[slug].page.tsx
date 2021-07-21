import React from 'react';

import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Post, PostTag } from '../../models';
import { getAllPostsByTagSlug } from '../../lib/api/posts';
import PostCardList from '../../components/posts/post-card-list.component';
import { getAllPostTags, getTagBySlug } from '../../lib/api/tags';
import { generateSiteDescription, generateSiteTitle } from '../../lib/utils/metadata';
import OpenGraph from '../../components/document/metadata/open-graph.component';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';

interface TagPageProps {
  tag?: PostTag;
  posts?: Post[];
}

const TagPage: React.FC<TagPageProps> = ({ tag, posts }) => {
  if (!tag) return null;

  const pageTitle = `Posts with the "${tag.name}" tag`;
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
