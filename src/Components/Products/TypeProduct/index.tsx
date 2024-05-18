import React from 'react';
import { 
  Conteiner,
  Image,
  Titule,
  ConteinerTimeAndFeedBack,
  IconTime,
  Text,
  TextFeed,
  Bar,
  IconFeed,
  Pay,
  Discont,
  ConteinerPayWithDiscount,
  ConteinerImageAndIconLike,
  IconAdd
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TypeProducts } from '../../../global/interface/inteface';

export default function TypeProduct({ DiscontI,PayI,TextFeedI,TextI,TituleI,imageI }: TypeProducts) {
  return (
    <Conteiner>
      <TouchableOpacity activeOpacity={0.2}>
        <ConteinerImageAndIconLike>
          <Image source={require('../../../global/images/Delicious-fried-chicken-with-french-fries--5 1.png')}/>
        </ConteinerImageAndIconLike>
      </TouchableOpacity>
        <Titule>Bacon Bliss Bomb...</Titule>
        <ConteinerTimeAndFeedBack>
          <IconTime name='clock-time-three-outline'/>
          <Text> 30 min</Text>
          <Bar> | </Bar>
          <IconFeed name='star'/>
          <TextFeed> 1.2k</TextFeed>
        </ConteinerTimeAndFeedBack>
        <ConteinerPayWithDiscount>
          <Pay>$10.99</Pay>
          <Discont> 10% off</Discont>
          <IconAdd name='add'/>
        </ConteinerPayWithDiscount>
    </Conteiner>
  );
}
