import React from 'react';

import { Book } from '../../../models';

import classes from './book-item.module.scss';

interface BookItemProps {
  book?: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  if (!book) return null;

  return (
    <div className={classes.container}>
      <h1>{book.title}</h1>
    </div>
  );
};

export default BookItem;
