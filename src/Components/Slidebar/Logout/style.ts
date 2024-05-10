import styled from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import theme from '../../../global/style/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;
`;

export const Icon = styled(MaterialIcons)`
    font-size: 25px;
    padding-right: ${RFValue(5)}px;
    color: ${theme.colors.DarkGray};
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${theme.colors.DarkGray};
`;
