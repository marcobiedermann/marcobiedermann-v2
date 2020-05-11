import algoliasearch from 'algoliasearch/lite';
import React, { FC } from 'react';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { ALGOLIA_API_KEY, ALGOLIA_APP_ID } from '../../constants/algolia';
import Hit from '../Hit';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export const Search: FC = (props) => {
  const { ...otherProps } = props;

  return (
    <InstantSearch searchClient={searchClient} indexName="Projects" {...otherProps}>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default Search;
