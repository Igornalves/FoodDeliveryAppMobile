import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    margin-top: 13px;
    margin-bottom: 22px;
    border-radius: 20px;
    width: 355px;
    height: 167px;
    margin-left: ${RFValue(13)}px;
    background-color: ${theme.colors.White};
    flex-direction: row-reverse;
    /* background-color: blue; */
`;

export const Image = styled.Image`
    width: 180px;
    height: 96px;
    position: absolute;
    flex: 1;
    top: 70px;
    border-radius: 0px 0px 20px;
`;

export const ConteinerAboutSubText = styled.View`
    margin-top: 8px;
`;

export const ConteinerPorcentagenForCupon = styled.View`
    width: ${RFValue(62)}px;
    height: ${RFValue(62)}px;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: ${RFValue(14)}px; 
    top: ${RFValue(17)}px;
    border-radius: ${RFValue(70)}px;
    background-color: black;
`;

export const TextPorcentagen = styled.Text`
    color: ${theme.colors.White};
    font-family: ${theme.fonts.HeadingH2};
    font-size: 20px;
`;

export const TextRub = styled.Text`
    color: ${theme.colors.White};
    font-family: ${theme.fonts.Subheading12};
    font-size: 12px;
`;

export const ConteinerButtomAndText = styled.View`
    margin-right: 160px;
`;

export const Text = styled.Text`
    font-family: ${theme.fonts.Subheading20};
    color: ${theme.colors.Black};
    font-size: 23px;
    margin-top: 15px;
`;

export const TextSub = styled.Text`
    color: ${theme.colors.DarkGray};
    font-size: 11px;
    font-family: ${theme.fonts.Subheading20};
`;

export const TouchableOpacity = styled.View`

`;

export const TextButtom= styled.Text`
    width: 115px;
    margin-top: 19px;
    font-size: 13px;
    /* padding-right: 25px; */
    border: 1.4px dashed ${theme.colors.DarkGray};
    padding: 6px;
    color: ${theme.colors.DarkGray};
`;
