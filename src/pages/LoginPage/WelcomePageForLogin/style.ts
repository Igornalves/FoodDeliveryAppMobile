import styled from 'styled-components/native';
import theme from '../../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    background-color: ${theme.colors.Light};
    align-items: center;
`;

export const ConteinerText = styled.View`
    align-items: center;
    margin-bottom: ${RFValue(17)}px;
`;

export const Titule = styled.Text`
    font-family: ${theme.fonts.HeadingH2};
    color: ${theme.colors.Black};
    font-size: ${RFValue(19)}px;
`;

export const SubText = styled.Text`
    font-family: ${theme.fonts.Body};
    color: #6B6B6B;
    font-size: ${RFValue(11)}px;
    margin-top: ${RFValue(3)}px;
`;

export const Image = styled.Image`
    width: ${RFValue(207)}px;
    height: ${RFValue(220)}px;
    margin-top: ${RFValue(120)}px;
    margin-bottom: ${RFValue(70)}px;
`;  
