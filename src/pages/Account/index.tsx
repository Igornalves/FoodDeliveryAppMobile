import React from 'react';
import { 
  Conteiner,
} from './style';

import User from '../../Components/User';
import TopNavigation from '../../Components/TopNavigation';
import Routes from '../../routes';


export default function Account(props) {
  return (
    <Conteiner>
      <TopNavigation {...props}/>
      <User/>
    </Conteiner>
  );
}
