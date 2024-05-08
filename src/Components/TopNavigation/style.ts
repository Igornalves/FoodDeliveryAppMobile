import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export const Conteiner = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ConteinerText = styled.View`
    margin-left: 16px;
    align-items: center;
    flex-direction: row;
`;

export const MenuIcon = styled(Ionicons)`
    font-size: 50px;
`;

export const Text = styled.Text`
    font-size: 18px;
`;

export const IconLocation = styled(Entypo)`
    font-size: 16px;
`;
