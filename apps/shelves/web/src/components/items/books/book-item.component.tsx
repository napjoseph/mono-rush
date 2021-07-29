import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { Book } from '../../../models';

interface BookItemProps {
  book?: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  if (!book) return null;

  return (
    <Box>
      <Text fontSize="lg">{book.title}</Text>
    </Box>
  );
};

export default BookItem;
