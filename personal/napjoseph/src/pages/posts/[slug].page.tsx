import React from 'react';

import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Post } from '../../models';
import { getAllPosts, getPostBySlug } from '../../lib/api/posts';
import markdownToHtml from '../../lib/utils/markdown-to-html';
import PostBody from '../../components/posts/post-body.component';
import PostHeader from '../../components/posts/post-header.component';

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
        <PostHeader post={post} />
        <PostBody content={post.content} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug.toString());
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
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
