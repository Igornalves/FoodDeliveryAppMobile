import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Conteiner = styled.View`
    align-items: center;
    height: ${RFValue(130)}px;
    width: ${RFValue(241)}px;
    justify-content: center;
    margin-top: ${RFValue(8)}px;
`;

export const BorderImage = styled.View`
    width: ${RFValue(65.6)}px;
    height: ${RFValue(65.6)}px;
    align-items: center;
    border: solid 3px;
    border-radius: ${RFValue(50)}px;
`;

export const Photo = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    margin-bottom: ${RFValue(8)}px;
`;

export const Text = styled.Text`
    font-size: 18px;
`;


