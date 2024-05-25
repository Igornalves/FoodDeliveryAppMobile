import React from 'react';
import { 
    IconBack
} from './style';
import { 
    GestureHandlerRootView, 
    TouchableOpacity 
} from 'react-native-gesture-handler';
import { goForScreenGetStarted } from '../../global/other/objects';

export default function TopComponentLogin(props) {

    function onPressWelcomePage() {
        goForScreenGetStarted(props)
    }

  return (
    <GestureHandlerRootView>
        <TouchableOpacity activeOpacity={0.2} onPress={onPressWelcomePage}>
            <IconBack name='arrow-left'/>
        </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
