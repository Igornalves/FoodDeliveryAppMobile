import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/style/theme';

export const Conteiner = styled.View`
    align-items: center;
`;

export const ConteinerButtom = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(13)}px;
`;

export const TextButtom = styled.Text`
    font-family: ${theme.fonts.Body};
    color: ${theme.colors.DarkGray};
    font-size: ${RFValue(11)}px;
`;
