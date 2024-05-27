import React from 'react';
import { 
    ConteinerButtom, 
    Text 
} from './style';
import { 
    GestureHandlerRootView, 
    TouchableOpacity 
} from 'react-native-gesture-handler';

export default function ButtomSignUpFormulario(props) {
  return (
    <GestureHandlerRootView>
      <TouchableOpacity activeOpacity={0.2} > 
        <ConteinerButtom>
          <Text>Sign up</Text>
        </ConteinerButtom>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
