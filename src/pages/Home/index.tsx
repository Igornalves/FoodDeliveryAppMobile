import React from 'react';
import { 
    Conteiner,
    Text,
    ConteinerTopNavigation
} from './style';
import TopNavigation from '../../Components/TopNavigation';

export default function Home(props) {
  return (
    <Conteiner>
      <ConteinerTopNavigation>
        <TopNavigation {...props}/>
      </ConteinerTopNavigation>
       {/* <Text> Ola Yasmin tudo bem ! ! !</Text> */}
    </Conteiner>
  );
}
