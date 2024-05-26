import React from 'react';
import { 
  Conteiner,
  Image,
} from './style';
import StapComponent from '../../Components/StapComponent';
import StapButtom from '../../Components/StapComponent/StapButtom';

export default function StapPage(props) {
  return (
    <Conteiner>
      <Image source={require('../../global/images/Family.png')}/> 
      <StapComponent 
        TituleS='Explore Restaurants'
        TextPrimaryS='Discover a world of delightful flavors'
        TextSecundaryS='at your fingertips'
      />
      <StapButtom {...props}/> 
    </Conteiner>
  );
}
