import styled from 'styled-components/native';
import theme from '../../global/style/theme';

export const Conteiner = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.Light};
`;

export const ImageTitule = styled.Image`
    width: 115px;
    height: 35px;
    /* background-color: red; */
    margin-bottom: 15px;
`;

export const TextSub = styled.Text`
    font-size: 15px;
    font-family: ${theme.fonts.Body};
    color: ${theme.colors.DarkGray};
`;
