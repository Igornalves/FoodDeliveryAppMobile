import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    background-color: ${theme.colors.Light};
    align-items: center;
`;

export const Image = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(190)}px;
    margin-top: ${RFValue(230)}px;
`;

