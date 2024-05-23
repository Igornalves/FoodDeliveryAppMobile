import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Titule = styled.Text`
    font-family: ${theme.fonts.HeadingH2};
    font-size: 24px;
    margin-bottom: ${RFValue(10)}px;
    margin-top: ${RFValue(85)}px;
`;

export const TextPrimary = styled.Text`
    font-family: ${theme.fonts.Body};
    color: ${theme.colors.DarkGray};
    font-size: 16px;
`;

export const TextSecundary = styled.Text`
    font-family: ${theme.fonts.Body};
    color: ${theme.colors.DarkGray};
    font-size: 16px;
    margin-bottom: ${RFValue(30)}px;
`;

