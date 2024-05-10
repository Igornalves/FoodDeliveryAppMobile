import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import theme from '../../global/style/theme';

export const Conteiner = styled.View`
    align-items: center;
    flex-direction: row;
    height: ${RFValue(90)}px;
    width: ${RFValue(241)}px;
    margin-top: ${RFValue(8)}px;
    padding-left: ${RFValue(7)}px;
    /* background-color: red; */
`;

export const BorderImage = styled.View`
    width: ${RFValue(65.6)}px;
    height: ${RFValue(65.6)}px;
    align-items: center;
    /* border: solid 3px; */
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

export const TextEmail = styled.Text`
    font-size: 14px;
    color: ${theme.colors.LightGray}
`;

export const Icon = styled(SimpleLineIcons)`
    font-size: 14px;
    margin-left: ${RFValue(9)}px;
`;

export const ConteinerInfo = styled.View`
    margin-left: 8px;
    margin-bottom: ${RFValue(10)}px;
`;

export const ConteinerName = styled.View`
    flex-direction: row;
`;


