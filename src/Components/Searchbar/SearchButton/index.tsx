import React from 'react';
import { 
    Conteiner, 
    Icon, 
    TextInput 
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SearchButton() {
  return (
    <TouchableOpacity activeOpacity={0.2}>
        <Conteiner>
            <Icon name='search'/>
            <TextInput>Search your food</TextInput>
        </Conteiner>
    </TouchableOpacity>
  );
}
