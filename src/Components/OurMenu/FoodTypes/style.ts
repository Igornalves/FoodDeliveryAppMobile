import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`
    flex-direction: row;
    align-items: center;
    /* background-color: blue; */
`

export const ImageFoodMeat = styled.Image`
    width: ${RFValue(70)}px;
    height: ${RFValue(45)}px;
`;

export const ImageFoodDrink = styled.Image`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
`;

export const ImageFoodDessert = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(45)}px;
`;

export const ImageFoodBurger = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(45)}px;
`;

export const TextName = styled.Text`
    margin-top: 10px;
    font-size: 12px;
    font-family: ${theme.fonts.Body};
`

export const ConteinerImagemFood = styled.View`
    align-items: center;
    margin-right: 15px;
`
