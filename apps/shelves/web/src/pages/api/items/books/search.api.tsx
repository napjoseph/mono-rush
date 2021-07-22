import { NextApiRequest, NextApiResponse } from 'next';

import { Book, BookSearchResponse } from '../../../../models';

// TODO: Return a list of books from the Google Books API.
// https://developers.google.com/books/docs/overview
const FAKE_BOOKS_DATA: Book[] = [
  {
    title: 'Book 1'
  },
  {
    title: 'Book 2'
  },
  {
    title: 'Book 3'
  }
];

const handler = (_req: NextApiRequest, res: NextApiResponse<BookSearchResponse>) => {
  res.status(200).json({
    results: FAKE_BOOKS_DATA
  });
};

export default handler;
