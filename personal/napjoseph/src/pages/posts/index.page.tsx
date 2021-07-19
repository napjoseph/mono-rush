import React from 'react';

import Head from 'next/head';
import { GetStaticProps } from 'next';

import PostCardList from '../../components/posts/post-card-list.component';
import { Post } from '../../models';
import { getAllPosts } from '../../lib/api/posts';

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts | Nap Joseph Calub</title>
      </Head>

      <PostCardList
        title="Posts"
        description="Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
        posts={posts}
        hideIfEmpty={false}
      />
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
