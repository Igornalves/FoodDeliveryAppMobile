import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: ${RFValue(5)}px;
`;

export const ConteinerText = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const MenuIcon = styled(Ionicons)`
    font-size: 45px;
    padding-right: ${RFValue(35)}px;
`;

export const Text = styled.Text`
    font-size: 18px;
`;

export const IconLocation = styled(Entypo)`
    font-size: 18px;
    margin-right: 1.9px;
`;

export const IconCart = styled(Feather)`
    font-size: 25px;
    padding-left: ${RFValue(35)}px;
    padding-right: 9px;
`;

export const IconChevron = styled(Entypo)`
    font-size: 25px;
    margin-right: 1.9px;
`;
