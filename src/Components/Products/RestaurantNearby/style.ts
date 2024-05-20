import styled from 'styled-components/native';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`

`;

export const ConteinerTop = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 18px 17px 17px;
`;

export const TextTitule = styled.Text`
    font-family: ${theme.fonts.HeadingH2};
    color: ${theme.colors.Black};
    font-size: 20px;
`;

export const TextSub = styled.Text`
    font-family: ${theme.fonts.Body};
    color: ${theme.colors.Black};
    font-size: 14px;
`;

