import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    background-color: ${theme.colors.Light};
`;

export const ConteinerDeliveryAddress = styled.View`
    
`;

export const Text= styled.Text`
    margin-left: ${RFValue(16)}px;
    margin-top: ${RFValue(21)}px;
    margin-bottom: ${RFValue(16)}px;
    font-family: ${theme.fonts.Subheading20};
    font-size: 20px;
`;
