import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.Light};
`;

export const ConteinerNotification = styled.View`
    margin-top: ${RFValue(15)}px;
`;
