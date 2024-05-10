import styled from 'styled-components/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    align-self: flex-end;
    margin-right: ${RFValue(14)}px;
    margin-top: ${RFValue(15)}px;
`;  

export const ButtonClose = styled(AntDesign)`
    font-size: ${RFValue(30)}px;
`;

