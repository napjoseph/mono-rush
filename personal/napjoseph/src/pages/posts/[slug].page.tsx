import React from 'react';

import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Post } from '../../models';
import { getAllPosts, getPostBySlug } from '../../lib/api/posts';
import PostBody from '../../components/posts/post-body.component';
import PostHeader from '../../components/posts/post-header.component';
import { SITE_CONFIG } from '../../config';

interface PostPageProps {
  post?: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  if (!post) return null;

  const siteTitle = SITE_CONFIG.title || '';

  return (
    <>
      <Head>
        <title>
          {post.title} | {siteTitle}
        </title>
      </Head>

      <article className="text-gray-700">
        <PostHeader post={post} />
        <PostBody post={post} />
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = getPostBySlug(params.slug.toString());

  return {
    props: {
      post
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
