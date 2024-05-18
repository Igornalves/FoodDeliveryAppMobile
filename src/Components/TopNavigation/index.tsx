import React from 'react';
import { 
    Conteiner,
    MenuIcon,
    Text,
    ConteinerText,
    IconLocation,
    IconCart,
    IconChevron 
} from './style';
import { TouchableOpacity } from 'react-native';
import { pressButton } from '../../global/other/objects';

export default function TopNavigation( props ) {

    // const pressButton = () => {
    //     props.navigation.dispatch(DrawerActions.openDrawer());
    // };
    
    function activeButton(){
        pressButton(props)
    } 

    return (
        <Conteiner>
            <TouchableOpacity activeOpacity={0.4} onPress={activeButton}> 
                <MenuIcon name={'menu-outline'}/> 
            </TouchableOpacity> 
            <TouchableOpacity activeOpacity={0.3}>
                <ConteinerText>
                    <IconLocation name='location-pin'/>
                    <Text>Rivertown Haven</Text>
                    <IconChevron name='chevron-down'/>
                </ConteinerText>
            </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.3}>
                    <IconCart name='shopping-cart'/>
                </TouchableOpacity>
        </Conteiner>
    );
}
