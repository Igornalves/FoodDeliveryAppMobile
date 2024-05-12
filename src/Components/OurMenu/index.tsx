import React from 'react';
import { 
    Conteiner,
    TextTitule,
} from './style';
import { OurMenuScrollView } from './OurMenuScrollView/style';
import FoodTypes from './FoodTypes';

export default function OurMenu() {
  return (
    <Conteiner>
        <TextTitule>Our menu</TextTitule>
        <OurMenuScrollView>
            <FoodTypes/>
        </OurMenuScrollView>
    </Conteiner>
  );
}
