import React from 'react';

import Head from 'next/head';

import PostsCardsList from '../components/sections/posts/posts-cards-list.component';
import { Post } from '../models';
import { getAllPosts } from '../lib/api/posts';

/* eslint-disable-next-line */
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (_props) => {
  const recentPosts: Post[] = getAllPosts().slice(0, 3);

  return (
    <>
      <Head>
        <title>Nap Joseph Calub</title>
      </Head>

      <PostsCardsList
        title="Recent Posts"
        description="Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
        posts={recentPosts}
        hideIfEmpty={false}
      />
    </>
  );
};

export default HomePage;
