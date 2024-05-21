import styled from 'styled-components/native';
import theme from '../../../global/style/theme';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Conteiner = styled.View`
    background-color: ${theme.colors.White};
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 10px;
    width: 359px;
    height: 125px;
`;

export const ConteinerImage = styled.View`
    background-color: ${theme.colors.Light};
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 96px;
    border-radius: 10px;
    margin-left: 12px;
    margin-right: 16px;
`;

export const Image = styled.Image`
    width: 90px;
    height: 90px;
`;

export const ConteinerBody = styled.View`
    
`;

export const ConteinerTop = styled.View`
    margin-bottom: 10px;
`;

export const ConteinerIconMoreText = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ConteinerDateAndItens = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const ConteinerButtom = styled.View`
    align-items: flex-end;
    position: absolute;
    left: 250px;
`;

export const TextTitule = styled.Text`
    /* background-color: red; */
    font-family: ${theme.fonts.Subheading16};
    font-size: 16px;
    color: ${theme.colors.Black};
`;

export const Icon = styled(Ionicons)`
    font-size: 16px;
`;

export const Delivered = styled.Text`
    font-size: 12px;
    font-family: ${theme.fonts.Body};
`;

export const Date = styled.Text`
    font-size: 10px;
    font-family: ${theme.fonts.Body};
`;

export const Itens = styled.Text`
    font-size: 10px;
    font-family: ${theme.fonts.Body};
`;

export const IdOrder = styled.Text`
    font-size: 10px;
    font-family: ${theme.fonts.Body};
`;

export const Pay = styled.Text`
    font-size: 10px;
    margin-top: 3px;
    margin-bottom: 68px;
    font-family: ${theme.fonts.Body};
`;
