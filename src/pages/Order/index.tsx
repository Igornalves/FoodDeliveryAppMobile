import React from 'react';
import { 
  Conteiner,
} from './style';
import SearchBar from '../../Components/Searchbar';
import MyOrders from '../../Components/MyOrders';
import { ListProductsVerticalScollView } from '../../Components/ListProductVertical/ListProductVertical';
import TopNavigationForPages from '../../Components/TopNavigationForPages';

export default function Order(props) {
  return (
    <Conteiner>
      <TopNavigationForPages TituleT='My Orders' IconAccountT='account' {...props}/>
      <SearchBar/>
      <ListProductsVerticalScollView>
        <MyOrders/>
      </ListProductsVerticalScollView>
    </Conteiner>
  );
}
