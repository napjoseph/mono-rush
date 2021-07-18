import React from 'react';

import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Post } from '../../models';
import { getAllPosts } from '../../lib/api/posts';

interface PostPageProps {
  post?: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | Nap Joseph Calub</title>
      </Head>

      <div className="text-gray-700">
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <p className="mt-3">{post.snippet}</p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const found = getAllPosts().filter((post) => post.slug === params.slug);

  return {
    props: {
      post: found[0] || null
    }
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
};

export default PostPage;
