import React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';

import formatDate from '../../lib/utils/format-date';
import { Article } from '../../models';
import TagPill from '../tags/tag-pill.component';
import convertToArticleTag from '../../lib/utils/convert-to-article-tag';
import ArticleStatus from './article-status.component';

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  const { title = '', frontMatter } = article;
  const { publishedDate = '', tags = [] } = frontMatter;

  const postTitleSection = (
    <Heading textStyle="post-title" layerStyle="post-title">
      {title}
    </Heading>
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
    <Flex flexWrap="wrap" gridGap={1.5} justify="center">
      {article.draft && <ArticleStatus status="Draft" />}

      {tags.map((tag) => (
        <TagPill key={tag} tag={convertToArticleTag(tag)} />
      ))}
    </Flex>
  );

  return (
    <Flex direction="column" gridGap={1} textAlign="center">
      {postTitleSection}
      {publishedDateSection}
      {tagsSection}
    </Flex>
  );
};

export default ArticleHeader;
