import React from 'react';
import { 
    Conteiner,
    TextTitule,
} from './style';
import FoodTypes from './FoodTypes';
import { ListProductsHorizontalScollView } from '../ListProductsHorizontal/ListProductsHorizontal';

export default function OurMenu() {
  return (
    <Conteiner>
        <TextTitule>Our menu</TextTitule>
        <ListProductsHorizontalScollView>
            <FoodTypes/>
        </ListProductsHorizontalScollView>
    </Conteiner>
  );
}
