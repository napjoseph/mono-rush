import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

import { Article } from '../../models';
import { MotionBox } from '../primitives/motion-box';
import ArticleHeader from './article-header.component';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <MotionBox whileHover={{ scale: 1.05 }}>
      <Flex direction="column" gridGap={2}>
        <ArticleHeader article={article} forCard={true} />

        <Text fontSize="xs" layerStyle="metadata" noOfLines={5}>
          {article.excerpt}
        </Text>
      </Flex>
    </MotionBox>
  );
};

export default ArticleCard;
