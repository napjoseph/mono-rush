import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { parseBook } from '../../../lib/utils/books';
import { Book } from '../../../models';
import { Volume } from '../../../models/vendor/google-apis/books';

const searchBook = async (volumeId: string): Promise<Book | null> => {
  const BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
  const API_KEY = process.env.NEXT_GOOGLE_BOOKS_API_KEY;

  const url = `${BASE_URL}/${volumeId}?key=${API_KEY}`;
  try {
    const { data } = await axios.get<Volume>(url);
    const book = parseBook(data);
    return book;
  } catch (error) {
    return null;
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Book | null>) => {
  const { slug } = req.query;

  // We will use the string[] form to make it easier to extract api location
  // from the slug later on.
  const id = slug[0];

  const book = await searchBook(id);

  res.status(200).json(book);
};

export default handler;
