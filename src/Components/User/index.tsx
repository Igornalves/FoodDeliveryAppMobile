import React from 'react';
import { 
  Conteiner,
  Photo,
  Text,
  BorderImage
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
          <Photo source={require('../../images/user.png')}/>
        </BorderImage>
        <Text>Helene Chung</Text>
      </Conteiner>
    </TouchableOpacity>
  );
  }
