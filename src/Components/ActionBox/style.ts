import styled from 'styled-components/native';
import theme from '../../global/style/theme';

export const Conteiner = styled.View`
    margin-top: 20px;
    border-radius: 20px;
    width: 350px;
    height: 160px;
    margin-right: 16px;
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
    color: ${theme.colors.White};
    border-radius: 10px;
    margin-top: 20px;
    background-color: ${theme.colors.Black};
    font-family: ${theme.fonts.Subheading12};
`;
