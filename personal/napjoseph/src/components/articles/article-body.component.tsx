import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import { Article } from '../../models';
import CustomComponents from './custom-components/index.component';

interface ArticleBodyProps {
  article?: Article;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ article }) => {
  if (!article) return null;

  return (
    <Flex direction="column" gridGap={3} overflow="auto">
      <MDXRemote {...article.serializedContent} components={CustomComponents} />
    </Flex>
  );
};

export default ArticleBody;
