import React from 'react';
import { 
  Conteiner,
  ConteinerIconAndText,
  ImageIcon,
  TextTitule
} from './style';
import TopComponentLogin from '../../../Components/TopComponentLogin';

export default function CreateLoginPage(props) {
  return (
    <Conteiner>
      <TopComponentLogin {...props}/>
      <ConteinerIconAndText>
          <ImageIcon source={require('../../../global/images/LogoApp.png')}/>
          <TextTitule>Create new account</TextTitule>
      </ConteinerIconAndText>
    </Conteiner>
  );
}
