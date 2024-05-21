import React from 'react';
import { 
  Conteiner,
  Photo,
  TextName,
  BorderImage,
  Icon,
  ConteinerInfo,
  ConteinerName,
  TextEmail
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function User(props) {
  return (
    <TouchableOpacity activeOpacity={0.12}>
      <Conteiner>
        <BorderImage>
          <Photo source={require('../../../global/images/user.png')}/>
        </BorderImage>
        <ConteinerInfo>
          <ConteinerName>
            <TextName>Helene Chung</TextName> 
            <Icon name='pencil'/>
          </ConteinerName>
          <TextEmail>Example@gmail.com</TextEmail>
        </ConteinerInfo>
      </Conteiner>
    </TouchableOpacity>
  );
  }
