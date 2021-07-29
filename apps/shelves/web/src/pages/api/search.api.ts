import { NextApiRequest, NextApiResponse } from 'next';

import { searchBooks } from '../../lib/api/search/books';
import { SearchResults } from '../../models';

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
