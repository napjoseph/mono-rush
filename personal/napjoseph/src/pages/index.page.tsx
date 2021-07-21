import React from 'react';

import { GetStaticProps } from 'next';

import PostCardList from '../components/posts/post-card-list.component';
import { Post } from '../models';
import { getAllPosts } from '../lib/api/posts';
import { createHeadData, generateSiteDescription, generateSiteTitle } from '../lib/utils/head-data';
import { createOpenGraphData } from '../lib/utils/open-graph-data';
import OpenGraph from '../components/document/open-graph.component';
import DynamicHead from '../components/document/dynamic-head.component';

interface HomePageProps {
  posts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
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

      <PostCardList title="Recent Posts" posts={posts} hideIfEmpty={false} />
    </>
  );
};

export const getStaticProps: GetStaticProps = (_context) => {
  const recentPosts = getAllPosts().slice(0, 3);

  return {
    props: {
      posts: recentPosts || []
    }
  };
};

export default HomePage;
