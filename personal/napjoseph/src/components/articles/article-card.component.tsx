import React from 'react';
import { Flex } from '@chakra-ui/react';

import { Article } from '../../models';
import { MotionBox } from '../primitives/motion-box';
import ArticleCardHeader from './article-card-header.component';
import ArticleCardBody from './article-card-body.component';

interface ArticleCardProps {
  article?: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  if (!article) return null;

  return (
    <MotionBox whileHover={{ scale: 1.05 }}>
      <Flex direction="column" gridGap={2}>
        <ArticleCardHeader article={article} />
        <ArticleCardBody article={article} />
      </Flex>
    </MotionBox>
  );
};

export default ArticleCard;
