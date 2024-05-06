import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Conteiner = styled.View`
    align-items: center;
    height: ${RFValue(130)}px;
    width: ${RFValue(241)}px;
    justify-content: center;
    margin-top: 10px;
`;

export const Photo = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(50)}px;
    margin-bottom: ${RFValue(8)}px;
`;

export const Text = styled.Text`
    font-size: 18px;
`;


