import React from 'react';
import { 
  Conteiner, 
  Icon, 
  TextInput 
} from './style';

export default function Search() {
  return (
    <Conteiner>
      <Icon name='search'/>
      <TextInput placeholder='Search your food'/>
    </Conteiner>
  );
}
