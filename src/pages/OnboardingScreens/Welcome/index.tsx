import React from 'react';
import { 
    Conteiner,
    ConteinerText,
    TituleText,
    SubText,
    ImageWelcome
} from './style';

export default function Welcome() {
  return (
    <Conteiner>
        <ImageWelcome source={require('../../../global/images/welcome.png')}/>
       <ConteinerText>
            <TituleText> Welcome to Foodpal </TituleText>
            <SubText> Discover a world of delightful flavors at your fingertips </SubText>
       </ConteinerText>
    </Conteiner>
  );
}
