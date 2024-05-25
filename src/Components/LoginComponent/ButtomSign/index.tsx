import React from 'react';
import { 
    Conteiner,
    Text
} from './style';
import { 
    GestureHandlerRootView, 
    TouchableOpacity 
} from 'react-native-gesture-handler';
import { CreateLoginPageStart } from '../../../global/other/objects';

export default function ButtomSign(props) {

    function onPressCreateLogin() {
        CreateLoginPageStart(props)
    }

  return (
    <GestureHandlerRootView>
        <TouchableOpacity activeOpacity={0.2} onPress={onPressCreateLogin}>
            <Conteiner>
                <Text>sign up</Text>
            </Conteiner>
        </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
