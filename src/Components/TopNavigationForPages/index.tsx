import React from 'react';
import { 
    ConteinerTop, 
    IconAccount, 
    IconBack, 
    Titule 
} from './style';
import { 
    goBackScreen, 
    goForScreenAccount 
} from '../../global/other/objects';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TopForPageTypes } from '../../global/interface/inteface';

export default function TopNavigationForPages({ TituleT, IconAccountT, ...props }: TopForPageTypes) {
    
    function onPressBack() {
        goBackScreen(props)
    }

    function onPressAccount() {
        goForScreenAccount(props)
    }

    return (
        <ConteinerTop>
            <TouchableOpacity activeOpacity={0.2} onPress={onPressBack}>
                <IconBack name='arrow-left'/>
            </TouchableOpacity>
            <Titule>{TituleT}</Titule>
            <TouchableOpacity activeOpacity={0.2} onPress={onPressAccount}>
                <IconAccount name={IconAccountT}/>
            </TouchableOpacity>
        </ConteinerTop>
    );
}
