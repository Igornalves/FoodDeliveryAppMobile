import React from 'react';
import { Conteiner } from './style';
import TopComponentLogin from '../../Components/TopComponentLogin';

export default function LoginPage(props) {
  return (
    <Conteiner>
      <TopComponentLogin {...props}/>
    </Conteiner>
  );
}
