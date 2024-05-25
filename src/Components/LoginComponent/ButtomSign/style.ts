import styled from 'styled-components/native';
import theme from '../../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`

`;

export const Text = styled.Text`
    font-family: ${theme.fonts.Body};
    color: ${theme.colors.Black};
    font-size: ${RFValue(11)}px;
`;

