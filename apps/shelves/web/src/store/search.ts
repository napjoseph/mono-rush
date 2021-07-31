import { proxy } from 'valtio';
import axios from 'axios';

import { DEFAULT_SEARCH_RESULTS, SearchResults } from '../models';
import localEndpoint from '../lib/utils/local-endpoint';

const BASE_URL = localEndpoint('/api/search');

export interface SearchStore {
  previousSearchText: string;
  searchText: string;
  results: SearchResults;
  search: () => void;
}

export const searchStore = proxy<SearchStore>({
  previousSearchText: '',
  searchText: '',
  results: DEFAULT_SEARCH_RESULTS,
  search: () => {
    if (searchStore.searchText.trim() === '') return;

    const url = `${BASE_URL}?q=${searchStore.searchText}`;
    try {
      axios.get<SearchResults>(url).then((response) => {
        searchStore.results = response.data;
      });
    } catch (error) {
      searchStore.results = DEFAULT_SEARCH_RESULTS;
    }
  }
});
