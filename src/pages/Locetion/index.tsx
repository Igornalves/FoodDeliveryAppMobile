import React from 'react';
import { 
  Conteiner,
} from './style';
import TopNavigationForPages from '../../Components/TopNavigationForPages';


export default function Locetion(props) {
  return (
    <Conteiner>
      <TopNavigationForPages TituleT='Tracking    ' IconAccountT='account-outline' {...props}/>
    </Conteiner>
  );
}
