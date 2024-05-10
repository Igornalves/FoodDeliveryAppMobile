import React from 'react';
import { 
  Conteiner,
  Photo,
  Text,
  BorderImage,
  Icon,
  ConteinerInfo,
  ConteinerName,
  TextEmail
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

export default function User(props) {

  const pressButton = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  

  return (
    <TouchableOpacity activeOpacity={0.12}>
      <Conteiner>
        <BorderImage>
          <Photo source={require('../../../global/images/user.png')}/>
        </BorderImage>
        <ConteinerInfo>
          <ConteinerName>
            <Text>Helene Chung</Text> 
            <Icon name='pencil'/>
          </ConteinerName>
          <TextEmail>Example@gmail.com</TextEmail>
        </ConteinerInfo>
      </Conteiner>
    </TouchableOpacity>
  );
  }
