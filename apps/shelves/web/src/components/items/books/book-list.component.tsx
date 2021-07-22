import React from 'react';

import { Book } from '../../../models';
import BookItem from './book-item.component';

import classes from './book-list.module.scss';

interface BookListProps {
  books?: Book[];
}

const BookList: React.FC<BookListProps> = ({ books = [] }) => {
  return (
    <div className={classes.classes}>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
