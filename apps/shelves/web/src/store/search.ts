import { proxy } from 'valtio';
import axios from 'axios';

import { DEFAULT_SEARCH_RESULTS, SearchResults } from '../models';
import localEndpoint from '../lib/utils/local-endpoint';

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

    const url = localEndpoint(`/api/search?q=${searchStore.searchText}`);
    try {
      axios.get<SearchResults>(url).then((response) => {
        searchStore.results = response.data;
      });
    } catch (error) {
      searchStore.results = DEFAULT_SEARCH_RESULTS;
    }
  }
});
