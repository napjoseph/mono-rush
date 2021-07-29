import React from 'react';
import { Flex } from '@chakra-ui/react';

import SearchBar from '../components/items/search/search-bar.component';
import SearchResults from '../components/items/search/search-results.component';

const HomePage: React.FC = (_props) => {
  return (
    <Flex direction="column" gridGap={4} maxW="4xl" mx="auto" my={5}>
      <SearchBar />
      <SearchResults />
    </Flex>
  );
};

export default HomePage;
