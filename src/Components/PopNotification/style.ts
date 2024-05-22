import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    width: ${RFValue(310)}px;
    height: ${RFValue(110)}px;
    margin-left: ${RFValue(10)}px;
    margin-bottom: ${RFValue(15)}px;
    border-radius: ${RFValue(10)}px;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.White};
`;

export const ConteinerOfTextAndInformation = styled.View`

`;

export const Image = styled.Image`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    margin-left: ${RFValue(12)}px;
    margin-right: ${RFValue(13)}px;
    border-radius: ${RFValue(10)}px;
`;

export const TextTitule = styled.Text`
    font-size: 13px;
    font-family: ${theme.fonts.HeadingH2};
    margin-bottom: ${RFValue(10)}px ;
`;

export const SubText1 = styled.Text`
    font-size: 11.6px;
    color: ${theme.colors.DarkGray};
`;

export const SubText2 = styled.Text`
    font-size: 11.6px;
    color: ${theme.colors.DarkGray};
`;

export const Time = styled.Text`
    position: absolute;
    left: ${RFValue(278)}px;
    top: ${RFValue(80)}px;
`;
