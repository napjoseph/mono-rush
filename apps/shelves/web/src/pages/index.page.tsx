import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

import BookList from '../components/items/books/book-list.component';
import { Book } from '../models';
import localEndpoint from '../lib/utils/local-endpoint';

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

const getBooksData = async (): Promise<Book[]> => {
  let books: Book[];
  try {
    const { data } = await axios.get(localEndpoint('/api/items/books/search'));
    books = data.results || [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      books = [];
    } else {
      books = [];
    }
  }

  return books;
};

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: {
      books: await getBooksData()
    }
  };
};

export default HomePage;
