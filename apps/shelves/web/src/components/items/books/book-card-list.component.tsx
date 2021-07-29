import React from 'react';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import { Book } from '../../../models';
import BookCardItem from './book-card-item.component';

interface BookCardListProps {
  title?: string;
  books?: Book[];
}

const BookCardList: React.FC<BookCardListProps> = ({ title, books = [] }) => {
  return (
    <Flex direction="column" gridGap={3}>
      {title && (
        <Heading as="h3" fontSize="lg">
          {title}
        </Heading>
      )}

      <SimpleGrid columns={4} gridGap={4} justifyItems="center">
        {books.map((book, index) => (
          <BookCardItem key={index} book={book} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default BookCardList;
