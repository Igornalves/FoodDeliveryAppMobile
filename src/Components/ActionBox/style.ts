import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    margin-top: 13px;
    border-radius: 20px;
    width: 350px;
    height: 160px;
    margin-left: ${RFValue(15)}px;
    background-color: ${theme.colors.White};
    flex-direction: row-reverse;
    /* background-color: blue; */
`;

export const ConteinerButtomAndText = styled.View`
    /* background-color: red; */
    padding-right: 38px;
`;

export const Image = styled.Image`
    width: 133px;
    height: 133px;
    margin-right: 16px;
    margin-bottom: 16px;
`;

export const Text = styled.Text`
    color: ${theme.colors.Black};
    font-size: 18px;
    margin-top: 15px;
    font-family: ${theme.fonts.Subheading20};
`;

export const TextSub = styled.Text`
    color: ${theme.colors.Black};
    font-size: 18px;
    font-family: ${theme.fonts.Subheading20};
`;

export const TextButtom = styled.Text`
    width: 120px;
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
    color: ${theme.colors.White};
    background-color: ${theme.colors.Black};
    font-family: ${theme.fonts.Subheading12};
`;
