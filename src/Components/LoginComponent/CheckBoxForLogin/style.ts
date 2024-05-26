import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`
    flex-direction: row;
    justify-content: center;
    /* margin-bottom: ${RFValue(5)}px; */
    margin-top: ${RFValue(6)}px;
    /* background-color: red; */
`;

export const Text = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${theme.fonts.Subheading16};
    color: ${theme.colors.DarkGray};
`;


