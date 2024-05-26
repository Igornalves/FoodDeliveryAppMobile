import React from 'react';
import { 
  Conteiner,
  Icon,
  InputText
} from './style';
import { TypeDateCreateAccount } from '../../../global/interface/inteface';

export default function FormularioLogin({ IconC,InputTextC, ...props }: TypeDateCreateAccount) {
  return (
    <Conteiner>
      <Icon name={IconC}/> 
      <InputText placeholder={InputTextC}/>
    </Conteiner>
  );
}
