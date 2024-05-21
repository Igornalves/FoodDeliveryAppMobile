import React from 'react';
import { 
    Conteiner,
    ButtonClose
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions} from '@react-navigation/native';
import { pressButtonClose } from '../../../global/other/objects';

export default function CloseButton(props) {
  
  function closeDrawer() {
    pressButtonClose(props)
  }

  return (
    <TouchableOpacity activeOpacity={0.12} onPress={closeDrawer}>
        <Conteiner>
            <ButtonClose name={'closecircleo'}/>
        </Conteiner>
    </TouchableOpacity>
  );
}
