import styled from 'styled-components/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import theme from '../../global/style/theme';

export const ConteinerTop = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 26px;
    margin-left: 22px;
    margin-bottom: 5px;
`;

export const IconBack = styled(FontAwesome5)`
    font-size: 22px;
    margin-right: 18px;
`;

export const Titule = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.HeadingH1};
`;

export const IconAccount = styled(MaterialCommunityIcons)`
    font-size: 28px;
    position: absolute;
    top: -14px;
    left: 155px;
`;
