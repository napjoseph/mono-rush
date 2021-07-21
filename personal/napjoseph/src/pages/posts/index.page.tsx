import React from 'react';

import { GetStaticProps } from 'next';

import PostCardList from '../../components/posts/post-card-list.component';
import { Post } from '../../models';
import { getAllPosts } from '../../lib/api/posts';
import {
  createHeadData,
  generateSiteDescription,
  generateSiteTitle
} from '../../lib/utils/head-data';
import DynamicHead from '../../components/document/dynamic-head.component';
import OpenGraph from '../../components/document/open-graph.component';
import { createOpenGraphData } from '../../lib/utils/open-graph-data';

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
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
