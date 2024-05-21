import React from 'react';
import { 
    Conteiner,
    ConteinerTopNavigation,
} from './style';
import TopNavigation from '../../Components/TopNavigation';
import OurMenu from '../../Components/OurMenu';
import ActionBox from '../../Components/ActionBox';
import Bestsellers from '../../Components/Products/Bestsellers';
import { ListProductsVerticalScollView } from '../../Components/ListProductVertical/ListProductVertical';
import CuponsMain from '../../Components/Cupons';
import Restaurants from '../../Components/Products/RestaurantNearby';
import SearchBar from '../../Components/Searchbar';

export default function Home(props) {
  return (
    <Conteiner>
      <ConteinerTopNavigation>
        <TopNavigation {...props}/>
      </ConteinerTopNavigation>
      <SearchBar/>
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
