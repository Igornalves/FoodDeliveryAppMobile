import React from 'react';
import { 
  ConteinerButtom,
  Text
} from './style';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { goForScreenStrap2 } from '../../../global/other/objects';

export default function StapButtom(props) {

  function onPressStrap2() {
    goForScreenStrap2(props)
  }

  return (
    <GestureHandlerRootView>
      <TouchableOpacity activeOpacity={0.2} onPress={onPressStrap2}> 
        <ConteinerButtom>
          <Text>Next</Text>
        </ConteinerButtom>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
