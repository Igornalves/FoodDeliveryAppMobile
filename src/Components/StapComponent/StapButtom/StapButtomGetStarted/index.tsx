import React from 'react';
import { 
  ConteinerButtom,
  Text
} from '../style';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { goForScreenGetStarted } from '../../../../global/other/objects';

export default function StapButtomGetStarted(props) {

  function onPressStrapGetStart() {
    goForScreenGetStarted(props)
  }

  return (
    <GestureHandlerRootView>
      <TouchableOpacity activeOpacity={0.2} onPress={onPressStrapGetStart}> 
        <ConteinerButtom>
          <Text>Get Started</Text>
        </ConteinerButtom>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
