import React from 'react';
import { 
    Conteiner,
    ConteinerTopNavigation,
    ConteinerSearchAndFilter
} from './style';
import TopNavigation from '../../Components/TopNavigation';
import Searchbar from '../../Components/Searchbar';
import FilterButton from '../../Components/FilterButton';

export default function Home(props) {
  return (
    <Conteiner>
      <ConteinerTopNavigation>
        <TopNavigation {...props}/>
      </ConteinerTopNavigation>
      <ConteinerSearchAndFilter>
        <Searchbar/>
        <FilterButton/>
      </ConteinerSearchAndFilter>
    </Conteiner>
  );
}
