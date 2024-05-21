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

export default function Order() {
  return (
    <Conteiner>
      <ConteinerTop>
        <TouchableOpacity activeOpacity={0.2}>
          <IconBack name='arrow-left'/>
        </TouchableOpacity>
        <Titule>My Orders</Titule>
        <TouchableOpacity activeOpacity={0.2}>
          <IconAccount name='account'/>
        </TouchableOpacity>
      </ConteinerTop>
      <SearchBar/>
    </Conteiner>
  );
}
