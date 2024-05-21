import React from 'react';
import { ConteinerSearchAndFilter } from './style';
import FilterButton from './FilterButton';
import SearchButton from './SearchButton';

export default function SearchBar() {
  return (
    <ConteinerSearchAndFilter>
        <SearchButton/>
        <FilterButton/>
    </ConteinerSearchAndFilter>
  );
}
