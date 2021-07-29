import { Book } from '../../../models';
import axios from 'axios';

import { Volumes } from '../../../models/vendor/google-apis/books';
import { parseBook } from '../../utils/books';

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?key=${process.env.NEXT_GOOGLE_BOOKS_API_KEY}`;

export const searchBooks = async (query: string): Promise<Book[]> => {
  const url = `${BASE_URL}&q=${query}`;
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
