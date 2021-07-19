import React from 'react';

import Head from 'next/head';
import { GetStaticProps } from 'next';

import PostCardList from '../../components/posts/post-card-list.component';
import { Post } from '../../models';
import { getAllPosts } from '../../lib/api/posts';
import { SITE_CONFIG } from '../../config';
import pluralize from '../../lib/utils/pluralize';

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  const siteTitle = SITE_CONFIG.title || '';

  return (
    <>
      <Head>
        <title>All Posts | {siteTitle}</title>
      </Head>

      <PostCardList
        title="All Posts"
        description={`Showing a total of ${posts.length} ${pluralize(posts.length, 'post')}.`}
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
