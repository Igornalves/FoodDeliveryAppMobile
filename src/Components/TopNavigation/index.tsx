import React from 'react';
import { 
    Conteiner,
    MenuIcon,
    Text,
    ConteinerText,
    IconLocation
} from './style';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function TopNavigation( props ) {

    const pressButton = () => {
        props.navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <Conteiner>
            <TouchableOpacity activeOpacity={0.12} onPress={pressButton}> 
                <MenuIcon name={'menu-outline'}/> 
            </TouchableOpacity> 
            <ConteinerText>
                <IconLocation name='location-pin'/>
                <Text>Rivertown Haven</Text>
            </ConteinerText>
        </Conteiner>
    );
}
