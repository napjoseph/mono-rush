import React from 'react';

import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Post } from '../../models';
import { getAllPosts, getPostBySlug } from '../../lib/api/posts';
import PostBody from '../../components/posts/post-body.component';
import PostHeader from '../../components/posts/post-header.component';
import { SITE_CONFIG } from '../../config';
import PostComments from '../../components/posts/post-comments.component';

import classes from './[slug].module.scss';

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

      <div className={classes.container}>
        <article className={classes.article}>
          <PostHeader post={post} />
          <PostBody post={post} />
        </article>

        <div className={classes.comments}>
          <PostComments post={post} />
        </div>
      </div>
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
