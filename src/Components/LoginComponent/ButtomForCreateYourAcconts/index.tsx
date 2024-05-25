import React from 'react';

import { 
    ConteinerButtom, 
    Text 
} from './style';

import { 
    GestureHandlerRootView, 
    TouchableOpacity 
} from 'react-native-gesture-handler';
import { CreateLoginPageStart } from '../../../global/other/objects';

export default function ButtomForCreateYourAcconts(props) {

    function onPressCreateLogin() {
        CreateLoginPageStart(props)
    }

  return (
    <GestureHandlerRootView>
      <TouchableOpacity activeOpacity={0.2} onPress={onPressCreateLogin}> 
        <ConteinerButtom>
          <Text>sign with email or phone</Text>
        </ConteinerButtom>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
