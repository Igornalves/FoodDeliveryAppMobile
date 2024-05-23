import React from 'react';
import { 
    Conteiner,
    Image
} from './style';
import StapComponent from '../../../Components/StapComponent';
import StapButtomGetStarted from '../../../Components/StapComponent/StapButtom/StapButtomGetStarted';

export default function StrapPage3(props) {
  return (
    <Conteiner>
        <Image source={require('../../../global/images/Strap2.png')}/> 
        <StapComponent 
            TextPrimaryS='Browse menus, customize your'
            TextSecundaryS='order, and enjoy hassle-free delivery'
            TituleS='Fast delivery'
        />
        <StapButtomGetStarted {...props}/> 
    </Conteiner>
  );
}
