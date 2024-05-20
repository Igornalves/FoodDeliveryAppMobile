import styled from 'styled-components/native';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`
    align-items: center; 
`;

export const ConteinerProductsList = styled.View`
    /* background-color: blue; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
`;

export const ConteinerTop = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 18px;
    margin-bottom: 18px;
`;

export const Text = styled.Text`
    font-family: ${theme.fonts.Subheading20};
    font-size: 20px;
    color: ${theme.colors.Black};
    margin-right: 167px;
`;

export const TextSecundary = styled.Text`
    font-family: ${theme.fonts.Body};
    font-size: 14px;
`;
