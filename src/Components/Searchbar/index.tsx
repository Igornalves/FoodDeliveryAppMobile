import React from 'react';
import { 
    Conteiner,
    Text,
    Icon
} from './style';

export default function Searchbar() {
  return (
    <Conteiner>
      <Icon name='search'/>
      <Text placeholder='Search your food'/>
    </Conteiner>
  );
}
