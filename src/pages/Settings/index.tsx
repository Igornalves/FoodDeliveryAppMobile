import React from 'react';
import { 
  Conteiner,
  Text
} from './style';
import TopNavigation from '../../Components/TopNavigation';

export default function Settings(props) {
  return (
    <Conteiner>
      <TopNavigation {...props}/>
      <Text> Ola Yasmin ! ! !</Text>
    </Conteiner>
  );
}
