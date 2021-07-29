import React from 'react';
import { Flex } from '@chakra-ui/react';

import { Book } from '../../../models';
import BookItem from './book-item.component';

interface BookListProps {
  books?: Book[];
}

const BookList: React.FC<BookListProps> = ({ books = [] }) => {
  return (
    <Flex gridGap={4}>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </Flex>
  );
};

export default BookList;
