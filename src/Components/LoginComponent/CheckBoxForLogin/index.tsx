import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { 
    Conteiner,
    Text,
    TextSub,
    ConteinerTexts
} from './style';
import { typeTextBox } from '../../../global/interface/inteface';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

export default function CheckBoxForLogin({ TextBox ,MostraTextoSecudario ,...props }: typeTextBox) {
    return (
        <Conteiner>
            <BouncyCheckbox 
                // style={{}}
                // unFillColor=""
                // textContainerStyle={{'square'}}
                // innerIconStyle={{ borderWidth: 2.5 }}
                // iconStyle={{ borderColor: "black" }}
                // text="Synthetic Checkbox"
                // textStyle={{
                //  textDecorationLine: "none",
                // }}
                // innerIconStyle={{
                //     borderRadius: 0,
                // }}
                size={25}
                fillColor="black"
                onPress={(isChecked: boolean) => {console.log(isChecked)}}
            />
            <GestureHandlerRootView>
                <TouchableOpacity activeOpacity={0.2}>
                    <ConteinerTexts>
                        <Text>{TextBox}</Text>
                        {MostraTextoSecudario === true? <TextSub>and terms</TextSub> : null}
                    </ConteinerTexts>
                </TouchableOpacity>
            </GestureHandlerRootView>
        </Conteiner>
    );
}
