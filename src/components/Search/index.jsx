import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { ALGOLIA_API_KEY, ALGOLIA_APP_ID } from '../../constants/algolia';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="Projects">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
};

export default Search;
