import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`
    /* background-color: red; */
    /* margin-bottom: ${RFValue(5)}px; */
    flex-direction: row;
    justify-content: center;
    margin-top: ${RFValue(6)}px;
`;

export const ConteinerTexts = styled.View`
    align-items: center;
`;

export const Text = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${theme.fonts.Subheading16};
    color: ${theme.colors.DarkGray};
`;

export const TextSub = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${theme.fonts.Subheading16};
    color: ${theme.colors.DarkGray};
`;


