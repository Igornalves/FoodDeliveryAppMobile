import React from 'react';
import { 
    Conteiner,
    ConteinerTop,
    TextTitule,
    TextSub
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListProductsHorizontalScollView } from '../../ListProductsHorizontal/ListProductsHorizontal';
import TypeProductRestaurantNearby from './TypeProductRestaurantNearby';

export default function Restaurants() {
  return (
    <Conteiner>
      <ConteinerTop>
        <TextTitule>Restaurant nearby</TextTitule>
        <TouchableOpacity>
            <TextSub>View all</TextSub>
        </TouchableOpacity>
      </ConteinerTop>
      <ListProductsHorizontalScollView>
        <TypeProductRestaurantNearby/>
        <TypeProductRestaurantNearby/>
        <TypeProductRestaurantNearby/>
        <TypeProductRestaurantNearby/>
      </ListProductsHorizontalScollView>
    </Conteiner>
  );
}
