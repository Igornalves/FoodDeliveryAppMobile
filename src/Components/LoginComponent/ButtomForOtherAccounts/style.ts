import styled from 'styled-components/native';
import theme from '../../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    background-color: ${theme.colors.White};
    width: ${RFValue(300)}px;
    height: ${RFValue(40)}px;
    margin-bottom: ${RFValue(10)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ImageIcon = styled.Image`
    width: ${RFValue(23)}px;
    height: ${RFValue(21.5)}px;
    margin-bottom: ${RFValue(2)}px;
    margin-right: ${RFValue(3.5)}px;
`

export const Text = styled.Text`
    font-family: ${theme.fonts.Body};
    color: ${theme.colors.DarkGray};
    font-size: ${RFValue(12)}px;
`
