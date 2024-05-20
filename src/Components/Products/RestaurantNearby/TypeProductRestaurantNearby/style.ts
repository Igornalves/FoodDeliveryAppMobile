import styled from 'styled-components/native';
import theme from '../../../../global/style/theme';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export const Conteiner = styled.View`
    background-color: ${theme.colors.White};
    align-items: center;
    width: 145px;
    height: 158px;
    margin-bottom: 20px;
    margin-right: 10px;
    border-radius: 10px;
`;  

export const ImageTop = styled.Image`
    width: 115px;
    height: 85px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 7px;
`;

export const ConteinerTop = styled.View`
    align-items: center;
`;

export const ConteinerIconsAndInformation = styled.View`
    flex-direction: row;
    margin-right: 24px;
    align-items: center;
    /* justify-content: center; */
`;

export const TextTitule = styled.Text`
    color: ${theme.colors.Black};
    font-family: ${theme.fonts.Subheading12};
    font-size: 12px;
    margin-bottom: 6px;
`;

export const IconFeed = styled(SimpleLineIcons)`
    color: ${theme.colors.DarkGray};
`;

export const IconLocation = styled(SimpleLineIcons)`
    color: ${theme.colors.DarkGray};
`;

export const TextIconLocation = styled.Text`
    color: ${theme.colors.DarkGray};
    font-family: ${theme.fonts.Body};
    font-size: 12px;
`;

export const TextIconFeed = styled.Text`
    color: ${theme.colors.DarkGray};
    font-family: ${theme.fonts.Body};
    font-size: 12px;
`;

