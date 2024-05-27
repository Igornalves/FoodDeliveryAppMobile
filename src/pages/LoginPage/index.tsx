import React from 'react';
import { Conteiner, ConteinerIconAndText, ImageIcon, TextTitule } from './style';
import TopComponentLogin from '../../Components/TopComponentLogin';
import { ListProductsVerticalScollView } from '../../Components/ListProductVertical/ListProductVertical';
import FormularioLogin from '../../Components/LoginComponent/FormularioLogin';
import CheckBoxForLogin from '../../Components/LoginComponent/CheckBoxForLogin';
import ButtomSignInFormulario from '../../Components/LoginComponent/ButtomSignInFormulario';

export default function LoginPage(props) {
  return (
    <Conteiner>
      <TopComponentLogin {...props}/>
      <ListProductsVerticalScollView>
        <ConteinerIconAndText>
          <ImageIcon source={require('../../global/images/LogoApp.png')}/>
          <TextTitule>Login account</TextTitule>
        </ConteinerIconAndText>
        <FormularioLogin
          IconC='account'
          InputTextC='Email'
          {...props}
        />
        <FormularioLogin
          IconC='key'
          InputTextC='Password'
          {...props}
        />
        <CheckBoxForLogin
            TextBox='Remeber me'
            MostraTextoSecudario= {false}
            {...props}
        />
        <ButtomSignInFormulario {...props}/>
      </ListProductsVerticalScollView>
    </Conteiner>
  );
}
