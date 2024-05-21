import React from 'react';
import { 
    Conteiner,
    ImageTop,
    ConteinerTop,
    TextTitule,
    ConteinerIconsAndInformation,
    IconLocation,
    TextIconLocation,
    IconFeed,
    TextIconFeed,
    ConteinerDiscountWithPay,
    TextDiscount,
    ConteinerPay,
    TextPay
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TypeRestaurantNeabyProducts } from '../../../../global/interface/inteface';
import DiscountProducts from './DiscountProducts';

export default function TypeProductRestaurantNearby({ TextIconFeedR,TextIconLocationR,TextTituleR,imagesR,mostraDesconto }:TypeRestaurantNeabyProducts ) {
  return (
    <TouchableOpacity activeOpacity={0.2}>
        <Conteiner>
            <ConteinerTop>
                <ImageTop source={{ uri: imagesR}}/>
                {mostraDesconto === true ? <DiscountProducts/> : null}
            </ConteinerTop>
            <TextTitule>{TextTituleR}</TextTitule>
            <ConteinerIconsAndInformation>
                <IconLocation name='location-pin'/>
                <TextIconLocation> {TextIconLocationR}  </TextIconLocation>
                <IconFeed name='star'/>
                <TextIconFeed> {TextIconFeedR}</TextIconFeed>
            </ConteinerIconsAndInformation>
        </Conteiner>
    </TouchableOpacity>
  );
}
