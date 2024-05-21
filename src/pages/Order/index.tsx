import React from 'react';
import { 
  Conteiner,
  ConteinerTop,
  IconBack,
  Titule,
  IconAccount
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from '../../Components/Searchbar';
import MyOrders from '../../Components/MyOrders';
import { ListProductsVerticalScollView } from '../../Components/ListProductVertical/ListProductVertical';
import { goBackScreen } from '../../global/other/objects';

export default function Order(props) {

  function onPressBack() {
    goBackScreen(props)
  }
  
  return (
    <Conteiner>
      <ConteinerTop>
        <TouchableOpacity activeOpacity={0.2} onPress={onPressBack}>
          <IconBack name='arrow-left'/>
        </TouchableOpacity>
        <Titule>My Orders</Titule>
        <TouchableOpacity activeOpacity={0.2}>
          <IconAccount name='account'/>
        </TouchableOpacity>
      </ConteinerTop>
      <SearchBar/>
      <ListProductsVerticalScollView>
        <MyOrders/>
      </ListProductsVerticalScollView>
    </Conteiner>
  );
}
