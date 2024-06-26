import React from 'react';
import { 
  ConteinerButtom,
  Text
} from '../style';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { goForScreenStrap3 } from '../../../../global/other/objects';

export default function StapButtom2(props) {

  function onPressStrap2() {
    goForScreenStrap3(props)
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
