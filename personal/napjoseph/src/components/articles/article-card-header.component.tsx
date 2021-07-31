import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

import formatDate from '../../lib/utils/format-date';
import { Article } from '../../models';
import TagPill from '../tags/tag-pill.component';
import convertToArticleTag from '../../lib/utils/convert-to-article-tag';
import { NextChakraLink } from '../primitives/next-chakra-link';

interface ArticleCardHeaderProps {
  article: Article;
}

const ArticleCardHeader: React.FC<ArticleCardHeaderProps> = ({ article }) => {
  const { slug = '', title = '', frontMatter } = article;
  const { publishedDate = '', tags = [] } = frontMatter;

  const postTitleSection = (
    <NextChakraLink
      href={`/posts/${slug}`}
      textStyle="post-title-card"
      layerStyle="post-title"
      fontFamily="heading"
    >
      {title}
    </NextChakraLink>
  );

  const publishedDateSection = publishedDate !== '' && (
    <Text fontSize="small" layerStyle="metadata">
      Published on{' '}
      <Text as="span" fontWeight="semibold" title={publishedDate}>
        {formatDate(publishedDate, 'DDD')}
      </Text>
    </Text>
  );

  const tagsSection = tags && tags.length !== 0 && (
    <Flex flexWrap="wrap" gridGap={1.5}>
      {tags.map((tag) => (
        <TagPill key={tag} tag={convertToArticleTag(tag)} />
      ))}
    </Flex>
  );

  return (
    <Flex direction="column" gridGap={1}>
      {postTitleSection}
      {publishedDateSection}
      {tagsSection}
    </Flex>
  );
};

export default ArticleCardHeader;
