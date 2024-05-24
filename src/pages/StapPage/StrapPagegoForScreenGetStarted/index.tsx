import React from 'react';
import { 
    Conteiner,
    Image
} from './style';
import StapComponent from '../../../Components/StapComponent';
import StapButtomGetStarted from '../../../Components/StapComponent/StapButtom/StapButtomGetStarted';

export default function StrapPagegoForScreenGetStarted(props) {
  return (
    <Conteiner>
        <Image source={require('../../../global/images/entregador.png')}/> 
        <StapComponent 
            TituleS='Fast delivery'
            TextPrimaryS='Browse menus, customize your'
            TextSecundaryS='order, and enjoy hassle-free delivery'
        />
        <StapButtomGetStarted {...props}/> 
    </Conteiner>
  );
}
