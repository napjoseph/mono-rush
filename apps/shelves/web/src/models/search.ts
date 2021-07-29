import { Book } from './items';

export interface SearchResults {
  // TODO: Add more result types.
  results?: {
    books: Book[];
  };
  // Works similar to go function signatures.
  // Returns the actual result or an error.
  error?: string;
}

export const DEFAULT_SEARCH_RESULTS: SearchResults = {
  results: {
    books: []
  }
};
