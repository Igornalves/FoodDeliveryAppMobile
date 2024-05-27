import React from 'react';
import { 
    ConteinerButtom, 
    Text 
} from './style';
import { 
    GestureHandlerRootView, 
    TouchableOpacity 
} from 'react-native-gesture-handler';

export default function ButtomSignInFormulario(props) {
  return (
    <GestureHandlerRootView>
      <TouchableOpacity activeOpacity={0.2} > 
        <ConteinerButtom>
          <Text>Sign in</Text>
        </ConteinerButtom>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
