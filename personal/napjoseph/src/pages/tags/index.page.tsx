import React from 'react';

import Head from 'next/head';
import { GetStaticProps } from 'next';

import TagCardList from '../../components/tags/tag-card-list.component';
import { PostTag } from '../../models';
import { getAllPostTags } from '../../lib/api/tags';
import { SITE_CONFIG } from '../../config';

interface TagsPageProps {
  tags: PostTag[];
}

const TagsPage: React.FC<TagsPageProps> = ({ tags }) => {
  const siteTitle = SITE_CONFIG.title || '';

  return (
    <>
      <Head>
        <title>Tags | {siteTitle}</title>
      </Head>

      <TagCardList
        title="Tags"
        description="Massa enim nec dui nunc mattis enim ut tellus. Morbi non arcu risus quis varius quam."
        tags={tags}
        hideIfEmpty={false}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const tags = getAllPostTags();

  return {
    props: {
      tags
    }
  };
};

export default TagsPage;
