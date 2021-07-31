import React from 'react';
import { Text } from '@chakra-ui/react';

import { Article } from '../../models';

interface ArticleCardBodyProps {
  article?: Article;
}

const ArticleCardBody: React.FC<ArticleCardBodyProps> = ({ article }) => {
  if (!article) return null;

  return (
    <Text fontSize="xs" layerStyle="metadata" noOfLines={5}>
      {article.excerpt}
    </Text>
  );
};

export default ArticleCardBody;
