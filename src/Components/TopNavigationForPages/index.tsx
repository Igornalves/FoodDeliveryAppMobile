import React from 'react';
import { 
    ConteinerTop, 
    IconAccount, 
    IconBack, 
    Titule 
} from './style';
import { goBackScreen } from '../../global/other/objects';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TopForPageTypes } from '../../global/interface/inteface';

export default function TopNavigationForPages({ TituleT, IconAccountT, ...props }: TopForPageTypes) {
    
    function onPressBack() {
        goBackScreen(props)
    }

    return (
        <ConteinerTop>
            <TouchableOpacity activeOpacity={0.2} onPress={onPressBack}>
                <IconBack name='arrow-left'/>
            </TouchableOpacity>
            <Titule>{TituleT}</Titule>
            <TouchableOpacity activeOpacity={0.2}>
                <IconAccount name={IconAccountT}/>
            </TouchableOpacity>
        </ConteinerTop>
    );
}
