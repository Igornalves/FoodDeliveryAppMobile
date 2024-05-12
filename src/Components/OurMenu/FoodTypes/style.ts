import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Conteiner = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: blue;
`

export const ImageFood = styled.Image`
    width: ${RFValue(73)}px;
    height: ${RFValue(45)}px;
`;

export const TextName = styled.Text`

`

export const ConteinerImagemFood = styled.View`
    align-items: center;
`
