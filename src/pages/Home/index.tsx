import React from 'react';
import { 
    Conteiner,
    ConteinerTopNavigation,
    ConteinerSearchAndFilter
} from './style';
import TopNavigation from '../../Components/TopNavigation';
import Searchbar from '../../Components/Searchbar';
import FilterButton from '../../Components/FilterButton';
import OurMenu from '../../Components/OurMenu';
import ActionBox from '../../Components/ActionBox';
import Products from '../../Components/Products';
import { ListProductsScollView } from '../../Components/ListProduct/ListProduct';

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
      <ListProductsScollView>
        <OurMenu/>
        <ActionBox/>
        <Products/>
      </ListProductsScollView>
    </Conteiner>
  );
}
