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
import Bestsellers from '../../Components/Products/Bestsellers';
import { ListProductsVerticalScollView } from '../../Components/ListProductVertical/ListProductVertical';
import CuponsMain from '../../Components/Cupons';
import Restaurants from '../../Components/Products/RestaurantNearby';

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
      <ListProductsVerticalScollView>
        <OurMenu/>
        <ActionBox/>
        <Bestsellers/>
        <CuponsMain/>
        <Restaurants/>
      </ListProductsVerticalScollView>
    </Conteiner>
  );
}
