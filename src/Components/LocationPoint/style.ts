import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    background-color: ${theme.colors.White};
    width: ${RFValue(307)}px;
    height: ${RFValue(56)}px;
    border-radius: ${RFValue(10)}px;
    margin-left: ${RFValue(12)}px;
    margin-bottom: ${RFValue(24)}px;
    flex-direction: row;
    align-items: center;
`;

export const ConteinerTexts = styled.View`
    margin-left: ${RFValue(10)}px;
`;

export const ConteinerIconPoint = styled.View`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
    border-radius: ${RFValue(5)}px;
    margin-left: ${RFValue(10)}px;
    background-color: ${theme.colors.Light};
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(MaterialIcons)`
    font-size: 22px;
`;

export const TextOne = styled.Text`
    color: ${theme.colors.Black};
    font-size: 16px;
`;

export const TextTwo = styled.Text`
    color: ${theme.colors.DarkGray};
    font-size: 12px;
`;