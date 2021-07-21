import React from 'react';

import Head from 'next/head';
import { GetStaticProps } from 'next';

import PostCardList from '../../components/posts/post-card-list.component';
import { Post } from '../../models';
import { getAllPosts } from '../../lib/api/posts';
import { generateSiteDescription, generateSiteTitle } from '../../lib/utils/metadata';
import OpenGraph from '../../components/document/metadata/open-graph.component';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  const pageTitle = 'Posts';
  const siteTitle = generateSiteTitle(pageTitle);
  const siteDescription = generateSiteDescription();

  const ogData = createOpenGraphData({
    ogTitle: siteTitle,
    ogDescription: siteDescription
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={siteDescription} />
      </Head>

      <OpenGraph data={ogData} />

      <PostCardList title={pageTitle} posts={posts} showTotal={true} hideIfEmpty={false} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const posts = getAllPosts();

  return {
    props: {
      posts
    }
  };
};

export default PostsPage;
