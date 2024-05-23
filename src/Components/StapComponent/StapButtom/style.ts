import styled from 'styled-components/native';
import theme from '../../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const ConteinerButtom = styled.View`
    background-color: ${theme.colors.Black};
    align-items: center;
    justify-content: center;
    width: ${RFValue(305)}px;
    margin-top: ${RFValue(205)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(20)}px;
`;  

export const Text = styled.Text`
    font-family: ${theme.fonts.Subheading16};
    font-size: 16px;
    color: ${theme.colors.White};
`;
