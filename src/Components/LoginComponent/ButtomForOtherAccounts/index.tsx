import React from 'react';
import { 
    Conteiner,
    ImageIcon,
    Text
} from './style';
import { 
    GestureHandlerRootView, 
    TouchableOpacity 
} from 'react-native-gesture-handler';

interface TypeOtherAccount {
    imageO: string,
    textO: string
}

export default function ButtomForOtherAccounts({ imageO,textO,...props }:TypeOtherAccount) {
  return (
    <GestureHandlerRootView>
        <TouchableOpacity activeOpacity={0.2}>
            <Conteiner>
            <ImageIcon source={{uri: imageO}}/>
            <Text>{textO}</Text>
            </Conteiner>
        </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
