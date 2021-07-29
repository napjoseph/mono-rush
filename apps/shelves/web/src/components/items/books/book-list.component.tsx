import React from 'react';
import { Box } from '@chakra-ui/react';

import { Book } from '../../../models';
import BookItem from './book-item.component';

interface BookListProps {
  books?: Book[];
}

const BookList: React.FC<BookListProps> = ({ books = [] }) => {
  return (
    <Box>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </Box>
  );
};

export default BookList;
