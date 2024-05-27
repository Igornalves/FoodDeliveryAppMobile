import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/style/theme';

export const Conteiner = styled.View`
    align-items: center;
`;

export const ConteinerIconAndText = styled.View`
    align-items: center;
    margin-top: ${RFValue(125)}px;
    margin-bottom: ${RFValue(19)}px;
`;

export const ImageIcon = styled.Image`
    width: ${RFValue(53)}px;
    height: ${RFValue(52)}px;
    margin-bottom: ${RFValue(22)}px;
`;

export const TextTitule = styled.Text`
    font-family: ${theme.fonts.HeadingH1};
    font-size: ${RFValue(22)}px;
`;

