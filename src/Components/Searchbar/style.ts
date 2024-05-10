import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import Feather from '@expo/vector-icons/Feather';

export const Conteiner = styled.View`
    background-color: ${theme.colors.White};
    flex-direction: row;
    width: 287px;
    height: 55px;
    border-radius: 10px;
    align-items:center ;
    margin-left: 10px;
    
`;

export const Text = styled.TextInput`
    font-size: 12px;
    padding-left: 12px;
`;

export const Icon = styled(Feather)`
    font-size: 25px;
    padding-left: 18px;
`;
