import React from 'react';
import { 
  Conteiner,
  ConteinerNotification
} from './style';
import TopNavigationForPages from '../../Components/TopNavigationForPages';
import PopNotification from '../../Components/PopNotification';
import { ListProductsVerticalScollView } from '../../Components/ListProductVertical/ListProductVertical';

export default function Notification(props) {
  return (
    <Conteiner>
      <TopNavigationForPages 
        TituleT='Notification' 
        {...props}
      />
      <ListProductsVerticalScollView>
        <ConteinerNotification>
          <PopNotification
            ImageP='https://img.freepik.com/psd-premium/20-de-desconto-no-modelo-de-banner-de-promocao-de-verao_445059-333.jpg'
            tituleP='Hurry and get a Discount 🏃‍♀️'
            subTxt1='Here are restaurants with up'
            subTxt2='to $30 OFF for you to enjoy'
            timeP='2d'
          />
          <PopNotification
            ImageP='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEV3vjXfxoZCi8zWcsTHrcYXJyUOX854anNNxSDa86w&s'
            tituleP='He took the Discount 😊'
            subTxt1='Here are restaurants with up'
            subTxt2='to $20 OFF for you to enjoy'
            timeP='4hr'
          />
          <PopNotification
            ImageP='https://marketplace.canva.com/EAFzs0dGUAU/1/0/1600w/canva-post-do-instagram-black-friday-neon-roxo-e-preto-7robKbHcXjk.jpg'
            tituleP='Black Friday with discount'
            subTxt1='Here are restaurants with up'
            subTxt2='to $50 OFF for you to enjoy'
            timeP='7d'
          />
        </ConteinerNotification>
      </ListProductsVerticalScollView>
    </Conteiner>
  );
}
