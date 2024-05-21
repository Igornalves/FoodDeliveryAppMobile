import styled from 'styled-components/native';
import theme from '../../global/style/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const Conteiner = styled.View`
    width: 100%;
    height: 100%;
    /* align-items:center; */
    /* justify-content: center; */
    background-color: ${theme.colors.Light};
`;

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
    margin-right: 157px;
    font-family: ${theme.fonts.HeadingH1};
`;

export const IconAccount = styled(MaterialCommunityIcons)`
    font-size: 26px;
`;
