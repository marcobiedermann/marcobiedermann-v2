import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { ALGOLIA_API_KEY, ALGOLIA_APP_ID } from '../../constants/algolia';
import Hit from '../Hit';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const Search = props => {
  const { ...otherProps } = props;

  return (
    <InstantSearch searchClient={searchClient} indexName="Projects" {...otherProps}>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default Search;
