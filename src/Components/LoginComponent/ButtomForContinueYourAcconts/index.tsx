import React from 'react';

import { 
    ConteinerButtom, 
    Text 
} from './style';

import { 
    GestureHandlerRootView, 
    TouchableOpacity 
} from 'react-native-gesture-handler';
import { ContinueLoginPageStart } from '../../../global/other/objects';

export default function ButtomForContinueYourAcconts(props) {

  function onPressContinueLogin() {
    ContinueLoginPageStart(props)
  }

  return (
    <GestureHandlerRootView>
      <TouchableOpacity activeOpacity={0.2} onPress={onPressContinueLogin}> 
        <ConteinerButtom>
          <Text>sign with email or phone</Text>
        </ConteinerButtom>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
