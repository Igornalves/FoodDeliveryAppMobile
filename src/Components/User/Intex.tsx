import React from 'react';
import { 
  Conteiner,
  Photo,
  Text
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Screens = props => {

}

export function User(props) {
  return (
    <DrawerContentScrollView {...props}>
        <TouchableOpacity activeOpacity={0.12}>
          <Conteiner>
            <Photo source={require('../../images/user.png')}/>
            <Text>Helene Chung</Text>
          </Conteiner>
        </TouchableOpacity>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}
