import styled from 'styled-components/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import theme from '../../../global/style/theme';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Conteiner = styled.View`
    /* align-items: center; */
    margin-bottom: 25px;
`;

export const ConteinerImageAndIconLike = styled.View`
    background-color: ${theme.colors.White};
    width: 170px ;
    height: 126px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;

export const ConteinerTimeAndFeedBack = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

export const ConteinerPayWithDiscount = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
`;

export const Image = styled.Image`
    width: 120px;
    height: 92px;
`;

export const Titule = styled.Text`
    color: ${theme.colors.Black};
    font-family: ${theme.fonts.Subheading16};
    font-size: 14px;
    margin-top: 7px;
`;
  
export const IconTime = styled(MaterialCommunityIcons)`
    font-size: 16.5px;
    color: ${theme.colors.DarkGray};
`;

export const IconLike = styled(AntDesign)`
    font-size: 20px;
    position: absolute;
    right: -75px;
    top: -98px;
    border-radius: 50px;
    padding: 2px;
    background-color: ${theme.colors.White};
`;

export const IconAdd = styled(MaterialIcons)`
    background-color: ${theme.colors.White};
    border-radius: 5px;
    font-size: 15.5px;
    color: ${theme.colors.Black};
    padding: 3px;
    margin-right: 10px;
`;
  
export const Text = styled.Text`
    color: ${theme.colors.DarkGray};
`;

export const TextFeed = styled.Text`
    color: ${theme.colors.DarkGray};
`;

export const Bar = styled.Text`
    color: ${theme.colors.DarkGray};
`;
 
export const IconFeed = styled(SimpleLineIcons)`
    font-size: 14.5px;
    color: ${theme.colors.DarkGray};
`;

export const Pay = styled.Text`

`;

export const Discont = styled.Text`
    font-size: 10px;
    margin-right: 40px;
    color: ${theme.colors.DarkGray};
`;


  