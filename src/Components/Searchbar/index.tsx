import React from 'react';
import { 
    Conteiner,
    TextInput,
    Icon
} from './style';

export default function Searchbar() {
  return (
    <Conteiner>
      <Icon name='search'/>
      <TextInput placeholder='Search your food'/>
    </Conteiner>
  );
}
