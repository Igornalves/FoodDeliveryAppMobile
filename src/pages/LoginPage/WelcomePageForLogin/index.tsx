import React from 'react';
import { 
  Conteiner,
  ConteinerText, 
  Titule,
  SubText,
  Image
} from './style';
import LoginComponent from '../../../Components/LoginComponent';
import ButtomForCreateYourAcconts from '../../../Components/LoginComponent/ButtomForCreateYourAcconts';

export default function WelcomePageForLogin(props) {
  return (
    <Conteiner>
      <Image source={require('../../../global/images/LoginImage.png')}/>
      <ConteinerText>
        <Titule>Welcome to Foodpal!</Titule>
        <SubText>The best restaurants at your home!</SubText>
      </ConteinerText>
      <LoginComponent {...props}/>
    </Conteiner>
  );
}
