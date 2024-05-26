import React from 'react';
import { 
    Conteiner,
    TextButtom,
    ConteinerButtom
} from './style';
import ButtomForOtherAccounts from './ButtomForOtherAccounts';
import ButtomSign from './ButtomSign';
import ButtomForContinueYourAcconts from './ButtomForContinueYourAcconts';

export default function LoginComponent(props) {
  return (
    <Conteiner>
        <ButtomForOtherAccounts
            imageO='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
            textO='Continue with Google'
        />
        <ButtomForOtherAccounts
            imageO='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/apple-icon.png'
            textO='Continue with Apple ID'
        />
        <ButtomForContinueYourAcconts {...props}/>
        <ConteinerButtom>
            <TextButtom>Don't have an account ? </TextButtom>
            <ButtomSign {...props}/>
        </ConteinerButtom>
    </Conteiner>
  );
}
