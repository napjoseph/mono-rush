import React from 'react';

import { GetStaticProps } from 'next';

import BookList from '../components/items/books/book-list.component';
import { Book } from '../models';
import { getBooks } from '../lib/api/books';

import classes from './index.module.scss';

interface HomePageProps {
  books?: Book[];
}

const HomePage: React.FC<HomePageProps> = ({ books = [] }) => {
  return (
    <div className={classes.container}>
      <BookList books={books} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = (_context) => {
  const books = getBooks();

  return {
    props: {
      books
    }
  };
};

export default HomePage;
