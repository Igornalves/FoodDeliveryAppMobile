import React from 'react';
import { 
    Conteiner,
    ButtonClose
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function CloseButton() {
  return (
    <TouchableOpacity activeOpacity={0.12}>
        <Conteiner>
            <ButtonClose name={'closecircleo'}/>
        </Conteiner>
    </TouchableOpacity>
  );
}
