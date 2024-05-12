import React from 'react';
import { 
    Conteiner,
    ImageTitule,
    TextSub
} from './style';

export default function OnboardingScreens() {
  return (
    <Conteiner>
        <ImageTitule source={require('../../global/images/ImageTituleIntroducion.png')}/>
        <TextSub>Delicious Discoveries Await</TextSub>
    </Conteiner>
  );
}
