import React from 'react';
import { 
    Conteiner,
    TextButtom,
    ConteinerButtom
} from './style';
import ButtomForOtherAccounts from './ButtomForOtherAccounts';
import ButtomForCreateYourAcconts from './ButtomForCreateYourAcconts';
import ButtomSign from './ButtomSign';

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
        <ButtomForCreateYourAcconts {...props}/>
        <ConteinerButtom>
            <TextButtom>Dont have an acount ? </TextButtom>
            <ButtomSign {...props}/>
        </ConteinerButtom>
    </Conteiner>
  );
}
