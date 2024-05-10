import React from 'react';
import { 
  Conteiner,
  Icon,
  Text
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Logout() {
  return (
    <TouchableOpacity activeOpacity={0.12}>
      <Conteiner>
          <Icon name='logout'/>
          <Text>Logout</Text>
      </Conteiner>
    </TouchableOpacity>
  );
}
