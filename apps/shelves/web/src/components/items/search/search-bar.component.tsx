import React from 'react';
import { Flex, Text, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useSnapshot } from 'valtio';

import { searchStore } from '../../../store/search';

const SearchBar: React.FC = () => {
  const snap = useSnapshot(searchStore);

  const search = () => {
    searchStore.previousSearchText = snap.searchText;
    searchStore.search();
    searchStore.searchText = '';
  };

  return (
    <Flex direction="column" gridGap={2}>
      <InputGroup>
        <Input
          type="text"
          value={snap.searchText}
          onChange={(event) => {
            searchStore.searchText = event.target.value;
          }}
          placeholder="Search"
          rounded="full"
          onKeyDown={(event) => {
            event.key === 'Enter' && search();
          }}
        />
        <InputRightElement>
          <IconButton
            onClick={() => search()}
            rounded="full"
            aria-label="Search"
            icon={<FaSearch />}
          />
        </InputRightElement>
      </InputGroup>
      {snap.previousSearchText.trim() !== '' && (
        <Text fontSize="sm" textAlign="center">
          Searching for{' '}
          <Text as="span" fontWeight="bold">
            &quot;{snap.previousSearchText}&quot;
          </Text>
        </Text>
      )}
    </Flex>
  );
};

export default SearchBar;
