import React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';

import formatDate from '../../lib/utils/format-date';
import { Article } from '../../models';
import TagPill from '../tags/tag-pill.component';
import convertToArticleTag from '../../lib/utils/convert-to-article-tag';
import { NextChakraLink } from '../primitives/next-chakra-link';

interface ArticleHeaderProps {
  article: Article;

  // When set to true, it uses a smaller header with a link to the article.
  forCard?: boolean;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article, forCard = false }) => {
  const { title = '', frontMatter } = article;
  const { publishedDate = '', tags = [] } = frontMatter;

  let postTitle: JSX.Element;
  if (forCard) {
    postTitle = (
      <NextChakraLink
        href={`/posts/${article.slug}`}
        textStyle="post-title-card"
        layerStyle="post-title"
        fontFamily="heading"
      >
        {article.title}
      </NextChakraLink>
    );
  } else {
    postTitle = (
      <Heading textStyle="post-title" layerStyle="post-title">
        {title}
      </Heading>
    );
  }

  const publishedDateSection = publishedDate !== '' && (
    <Text fontSize="small" layerStyle="metadata">
      Published on{' '}
      <Text as="span" fontWeight="semibold" title={publishedDate}>
        {formatDate(publishedDate, 'DDD')}
      </Text>
    </Text>
  );

  const tagsSection = tags && tags.length !== 0 && (
    <Flex gridGap={1.5}>
      {tags.map((tag) => (
        <TagPill key={tag} tag={convertToArticleTag(tag)} />
      ))}
    </Flex>
  );

  return (
    <Flex direction="column" gridGap={1}>
      {postTitle}
      {publishedDateSection}
      {tagsSection}
    </Flex>
  );
};

export default ArticleHeader;
