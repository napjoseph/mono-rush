import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { parseBook } from '../../lib/utils/books';
import { Book, SearchResults } from '../../models';
import { Volumes } from '../../models/vendor/google-apis/books';

const searchBooks = async (searchText: string): Promise<Book[]> => {
  const BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
  const API_KEY = process.env.NEXT_GOOGLE_BOOKS_API_KEY;

  const url = `${BASE_URL}?q=${searchText}&key=${API_KEY}`;

  try {
    const { data } = await axios.get<Volumes>(url);
    const books: Book[] = [];
    data.items.map((volume) => {
      books.push(parseBook(volume));
    });

    return books;
  } catch (error) {
    return [];
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse<SearchResults>) => {
  const { q = '' } = req.query;
  const books = await searchBooks(q.toString());

  res.status(200).json({
    results: {
      books
    }
  });
};

export default handler;
