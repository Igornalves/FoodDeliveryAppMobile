import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { 
    Conteiner,
    Text
} from './style';

export default function CheckBoxForLogin() {
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
            <Text>Remeber me</Text>
        </Conteiner>
    );
}
