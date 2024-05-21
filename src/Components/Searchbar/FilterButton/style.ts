import styled from 'styled-components/native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`
    background-color: ${theme.colors.White};
    width: 55px;
    height: 55px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-left: 16px;
`;

export const IconFilter = styled(SimpleLineIcons)`
    font-size: 20px;
    transform: rotate(90deg);
`;
