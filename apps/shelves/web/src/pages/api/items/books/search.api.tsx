import { NextApiRequest, NextApiResponse } from 'next';

import { FAKE_BOOKS_DATA } from '../../../../data/items/books/fake-books';
import { BookSearchResponse } from '../../../../models';

const handler = (_req: NextApiRequest, res: NextApiResponse<BookSearchResponse>) => {
  res.status(200).json({
    results: FAKE_BOOKS_DATA
  });
};

export default handler;
