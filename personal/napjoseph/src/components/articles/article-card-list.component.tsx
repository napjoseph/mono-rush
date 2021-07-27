import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react';

import { Article } from '../../models';
import ArticleCard from './article-card.component';
import TotalResults from '../snippets/total-results/total-results.component';

interface ArticleCardListProps {
  title: string;
  articles: Article[];
  description?: string;
  showTotal?: boolean;
  hideIfEmpty?: boolean;
}

const ArticleCardList: React.FC<ArticleCardListProps> = ({
  title = 'Articles',
  articles = [],
  description,
  showTotal = false,
  hideIfEmpty = true
}) => {
  if (hideIfEmpty && !articles.length) return null;

  const headingColor = mode('gray.900', 'gray.300');
  const bodyColor = mode('gray.700', 'gray.400');

  return (
    <Flex direction="column" gridGap={4}>
      <Flex direction="column" gridGap={4}>
        <Heading textColor={headingColor}>{title}</Heading>
        {description && <Text textColor={bodyColor}>{description}</Text>}
        {showTotal && (
          <Box textColor={bodyColor}>
            <TotalResults total={articles.length} unit="article" />
          </Box>
        )}
      </Flex>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, md: 3 }}>
        {articles.length ? (
          articles.map((article) => <ArticleCard key={article.title} article={article} />)
        ) : (
          <Text textColor={bodyColor}>
            It looks a little empty right now. Please check back later.
          </Text>
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default ArticleCardList;
