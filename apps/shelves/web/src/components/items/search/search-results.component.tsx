import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useSnapshot } from 'valtio';

import { searchStore } from '../../../store/search';
import BookCardList from '../books/book-card-list.component';

const SearchResults: React.FC = () => {
  const snap = useSnapshot(searchStore);
  const books = snap.results.results.books;

  return (
    <Flex direction="column" gridGap={2}>
      {books.length > 0 ? <BookCardList title="From Google Books" books={books} /> : null}
    </Flex>
  );
};

export default SearchResults;
