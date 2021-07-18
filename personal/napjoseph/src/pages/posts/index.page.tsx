import React from 'react';

import Head from 'next/head';

import PostsCardsList from '../../components/sections/posts/posts-cards-list.component';
import { Post } from '../../models';
import { getAllPosts } from '../../lib/api/posts';

/* eslint-disable-next-line */
interface PostsPageProps {}

const PostsPage: React.FC<PostsPageProps> = (_props) => {
  const recentPosts: Post[] = getAllPosts();

  return (
    <>
      <Head>
        <title>Posts | Nap Joseph Calub</title>
      </Head>

      <PostsCardsList
        title="Posts"
        description="Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
        posts={recentPosts}
        hideIfEmpty={false}
      />
    </>
  );
};

export default PostsPage;
