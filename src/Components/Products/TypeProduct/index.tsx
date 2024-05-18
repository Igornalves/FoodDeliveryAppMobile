import React from 'react';
import { 
  Conteiner,
  Image,
  Titule,
  ConteinerTimeAndFeedBack,
  IconTime,
  Text,
  Bar,
  IconFeed,
  Pay,
  Discont,
  ConteinerPayWithDiscount,
  ConteinerImageAndIconLike,
  IconAdd
} from './style';

export default function TypeProduct() {
  return (
    <Conteiner>
      <ConteinerImageAndIconLike>
        <Image source={require('../../../global/images/Delicious-fried-chicken-with-french-fries--5 1.png')}/>
      </ConteinerImageAndIconLike>
      <Titule>Bacon Bliss Bomb...</Titule>
      <ConteinerTimeAndFeedBack>
        <IconTime name='clock-time-three-outline'/>
        <Text>30 min</Text>
        <Bar>|</Bar>
        <IconFeed name='star'/>
        <Text>1.2k</Text>
      </ConteinerTimeAndFeedBack>
      <ConteinerPayWithDiscount>
        <Pay>$10.99</Pay>
        <Discont>10% off</Discont>
        <IconAdd name='add'/>
      </ConteinerPayWithDiscount>
    </Conteiner>
  );
}
