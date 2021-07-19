import React from 'react';

import Head from 'next/head';
import { GetStaticProps } from 'next';

import PostCardList from '../components/posts/post-card-list.component';
import { Post } from '../models';
import { getAllPosts } from '../lib/api/posts';

interface HomePageProps {
  posts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Nap Joseph Calub</title>
      </Head>

      <PostCardList
        title="Recent Posts"
        description="Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
        posts={posts}
        hideIfEmpty={false}
      />
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
