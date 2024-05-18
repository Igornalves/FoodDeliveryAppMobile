import styled from 'styled-components/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`

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
`;

export const ConteinerPayWithDiscount = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    width: 120px;
    height: 75px;
`;

export const Titule = styled.Text`

`;
  
export const IconTime = styled(MaterialCommunityIcons)`

`;

export const IconAdd = styled(MaterialIcons)`

`;
  
export const Text = styled.Text`

`;

export const Bar = styled.Text`

`;
 
export const IconFeed = styled(SimpleLineIcons)`

`;

export const Pay = styled.Text`

`;

export const Discont = styled.Text`

`;


  