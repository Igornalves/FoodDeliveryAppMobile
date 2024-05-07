import React from 'react';
import { 
  Conteiner,
  Photo,
  Text,
  BorderImage
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function User() {
  return (
    <TouchableOpacity activeOpacity={0.12}>
      <Conteiner>
        <BorderImage>
          <Photo source={require('../../images/user.png')}/>
        </BorderImage>
        <Text>Helene Chung</Text>
      </Conteiner>
    </TouchableOpacity>
);
}
