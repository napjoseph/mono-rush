import React from 'react';

import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Post, PostTag } from '../../models';
import { getAllPostsByTagSlug } from '../../lib/api/posts';
import PostCardList from '../../components/posts/post-card-list.component';
import { getAllPostTags, getTagBySlug } from '../../lib/api/tags';

interface TagPageProps {
  tag?: PostTag;
  posts?: Post[];
}

const TagPage: React.FC<TagPageProps> = ({ tag, posts }) => {
  if (!tag) return null;

  return (
    <>
      <Head>
        <title>{tag.name} | Nap Joseph Calub</title>
      </Head>

      <div className="text-gray-700">
        <PostCardList title={`Posts with the ${tag.name} tag`} posts={posts} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params.slug.toString();
  const tag = getTagBySlug(slug);
  const posts = getAllPostsByTagSlug(slug);

  return {
    props: {
      tag,
      posts
    }
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getAllPostTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: tag.slug
        }
      };
    }),
    fallback: false
  };
};

export default TagPage;
