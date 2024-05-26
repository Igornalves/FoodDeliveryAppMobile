import styled from 'styled-components/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from '../../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.White};
    border-radius: ${RFValue(5)}px;
    width: ${RFValue(299)}px;
    height: ${RFValue(49)}px;
    margin-bottom: ${RFValue(15)}px;
`;

export const InputText = styled.TextInput`
    /* background-color: red;  */
    margin: 0;
    width: ${RFValue(250)}px;
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(24)}px;
    margin-left: ${RFValue(11)}px;
    margin-right: ${RFValue(11)}px;
`;
