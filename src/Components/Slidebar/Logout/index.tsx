import React from 'react';
import { 
  Conteiner,
  Icon,
  Text
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BackLogin } from '../../../global/other/objects';

export default function Logout(props) {

  function BackWelcomeLogin(){
    BackLogin(props)
  }

  return (
    <TouchableOpacity activeOpacity={0.12} onPress={BackWelcomeLogin}>
      <Conteiner>
          <Icon name='logout'/>
          <Text>Logout</Text>
      </Conteiner>
    </TouchableOpacity>
  );
}
