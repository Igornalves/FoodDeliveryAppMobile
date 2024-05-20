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
  IconAdd,
  IconLike
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TypeProductBestseller } from '../../../../global/interface/inteface';

export default function TypeProductBestsellers({ DiscontI,PayI,TextFeedI,TextI,TituleI,imageI }: TypeProductBestseller) {
  return (
    <Conteiner>
      <TouchableOpacity activeOpacity={0.2}>
        <ConteinerImageAndIconLike>
          <Image source={{uri: imageI}}/>
          <TouchableOpacity activeOpacity={0.2}>
            <IconLike name='hearto'/>
          </TouchableOpacity>
        </ConteinerImageAndIconLike>
      </TouchableOpacity>
        <Titule>{TituleI}</Titule>
      <ConteinerTimeAndFeedBack>
        <IconTime name='clock-time-three-outline'/>
        <Text> {TextI}</Text>
        <Bar> | </Bar>
        <IconFeed name='star'/>
        <TextFeed> {TextFeedI}</TextFeed>
      </ConteinerTimeAndFeedBack>
      <ConteinerPayWithDiscount>
        <Pay>{PayI}</Pay>
        <Discont> {DiscontI}</Discont>
        <IconAdd name='add'/>
      </ConteinerPayWithDiscount>
    </Conteiner>
  );
}
