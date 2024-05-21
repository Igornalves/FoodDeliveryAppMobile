import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`
    background-color: ${theme.colors.White};
    flex-direction: row;
    width: 287px;
    height: 55px;
    border-radius: 10px;
    align-items:center ;
    margin-left: 10px;
`;

export const TextInput = styled.Text`
    font-size: 12px;
    margin-left: 12px;
    font-family: ${theme.fonts.Body};
    color: ${theme.colors.DarkGray};
    /* padding-left: 12px; */
    /* width: 245px; */
    /* height: 55px; */
`;

export const Icon = styled(Feather)`
    font-size: 25px;
    padding-left: 18px;
`;
