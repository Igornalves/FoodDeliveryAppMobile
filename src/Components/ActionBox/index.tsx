import React from 'react';
import { 
    Conteiner,
    Image,
    ConteinerButtomAndText,
    Text,
    TextButtom,
    TextSub
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ActionBox() {
  return (
    <Conteiner>
      <Image source={require('../../global/images/entregador.png')}/>
      <ConteinerButtomAndText>
        <Text>Free delivery</Text>
        <TextSub>within 20km!</TextSub>
        <TouchableOpacity style={{width: 120}} activeOpacity={0.5}>
          <TextButtom>Order now</TextButtom>
        </TouchableOpacity>
      </ConteinerButtomAndText>
    </Conteiner>  
  );
}
