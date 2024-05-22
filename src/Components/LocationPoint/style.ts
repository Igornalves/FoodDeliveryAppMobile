import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const Conteiner = styled.View`
    background-color: ${theme.colors.White};
    width: 353px;
    height: 56px;
    margin-left: 17px;
    flex-direction: row;
    align-items: center;
`;

export const ConteinerIconPoint = styled.View`
    width: 32px;
    height: 32px;
    background-color: ${theme.colors.Light};
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(MaterialIcons)`

`;

export const TextOne = styled.Text`

`;
export const TextTwo = styled.Text`

`;