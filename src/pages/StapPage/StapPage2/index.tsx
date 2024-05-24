import React from 'react';
import { 
    Conteiner,
    Image
} from './style';
import StapComponent from '../../../Components/StapComponent';
import StapButtom2 from '../../../Components/StapComponent/StapButtom/StrapButtom2';

export default function StrapPage2(props) {
  return (
    <Conteiner>
        <Image source={require('../../../global/images/Strap2.png')}/> 
        <StapComponent 
            TituleS='Easy Ordering'
            TextPrimaryS='Browse menus, customize your'
            TextSecundaryS='order, and enjoy hassle-free delivery'
        />
        <StapButtom2 {...props}/> 
    </Conteiner>
  );
}
