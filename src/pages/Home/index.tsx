import React from 'react';
import { 
    Conteiner,
    ConteinerTopNavigation
} from './style';
import TopNavigation from '../../Components/TopNavigation';
import Searchbar from '../../Components/Searchbar';

export default function Home(props) {
  return (
    <Conteiner>
      <ConteinerTopNavigation>
        <TopNavigation {...props}/>
      </ConteinerTopNavigation>
      <Searchbar/>
    </Conteiner>
  );
}
