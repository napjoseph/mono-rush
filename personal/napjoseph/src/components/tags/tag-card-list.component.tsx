import React from 'react';
import { Box, Flex, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react';

import { ArticleTag } from '../../models';
import TotalResults from '../snippets/total-results/total-results.component';
import TagPill from './tag-pill.component';

interface TagCardListProps {
  title: string;
  tags: ArticleTag[];
  description?: string;
  showTotal?: boolean;
  hideIfEmpty?: boolean;
}

const TagCardList: React.FC<TagCardListProps> = ({
  title = 'Tags',
  tags = [],
  description,
  showTotal = false,
  hideIfEmpty = true
}) => {
  if (hideIfEmpty && !tags.length) return null;

  const headingColor = mode('gray.900', 'gray.300');
  const bodyColor = mode('gray.700', 'gray.400');

  return (
    <Flex direction="column" gridGap={4}>
      <Flex direction="column" gridGap={4}>
        <Heading textColor={headingColor}>{title}</Heading>
        {description && <Text textColor={bodyColor}>{description}</Text>}
        {showTotal && (
          <Box textColor={bodyColor}>
            <TotalResults total={tags.length} unit="tag" />
          </Box>
        )}
      </Flex>
      <Flex gridGap={1.5}>
        {tags.length ? (
          tags.map((tag) => <TagPill key={tag.name} tag={tag} />)
        ) : (
          <Text textColor={bodyColor}>
            It looks a little empty right now. Please check back later.
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default TagCardList;
