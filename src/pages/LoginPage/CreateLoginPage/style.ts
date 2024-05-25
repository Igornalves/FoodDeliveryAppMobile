import styled from 'styled-components/native';
import theme from '../../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    background-color: ${theme.colors.Light};
    align-items: center;
    justify-content: center;
`;

export const ConteinerIconAndText = styled.View`
    align-items: center;
    margin-top: 46px;
`;

export const ImageIcon = styled.Image`
    width: ${RFValue(53)}px;
    height: ${RFValue(52)}px;
    margin-bottom: 24px;
`;

export const TextTitule = styled.Text`
    font-family: ${theme.fonts.HeadingH1};
    font-size: ${RFValue(22)}px;
`;
