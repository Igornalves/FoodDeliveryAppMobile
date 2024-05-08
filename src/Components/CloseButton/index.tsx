import React from 'react';
import { 
    Conteiner,
    ButtonClose
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';


export default function CloseButton(props) {
  
  const pressButton = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <TouchableOpacity activeOpacity={0.12} onPress={pressButton}>
        <Conteiner>
            <ButtonClose name={'closecircleo'}/>
        </Conteiner>
    </TouchableOpacity>
  );
}
