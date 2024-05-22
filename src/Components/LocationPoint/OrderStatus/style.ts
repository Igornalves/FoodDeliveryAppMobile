import styled from 'styled-components/native';
import theme from '../../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`

`;

export const TextTitule = styled.Text`
    font-family: ${theme.fonts.Subheading20};
    color: ${theme.colors.Black};
    font-size: 20px;
    margin-left: ${RFValue(16)}px;
    margin-top: ${RFValue(21)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const Image = styled.Image`
    width: ${RFValue(199)}px;
    height: ${RFValue(239)}px;
    margin-left: ${RFValue(39)}px;
`;
