import React from 'react';
import { 
    Conteiner,
    ConteinerImagemFood,
    ImageFood,
    TextName,
} from './style';

export default function FoodTypes() {
  return (
      <Conteiner>
        <ConteinerImagemFood>
            <ImageFood source={require('../../../global/images/Delicious-fried-chicken-with-french-fries--5 1.png')}/>
            <TextName>Meat</TextName>
        </ConteinerImagemFood>
        <ConteinerImagemFood>
            <ImageFood source={require('../../../global/images/Classy-old-fashioned-holiday-greeting--6 1.png')}/>
            <TextName>Cold drinks</TextName>
        </ConteinerImagemFood>
        <ConteinerImagemFood>
            <ImageFood source={require('../../../global/images/donut_6 1.png')}/>
            <TextName>Dessert</TextName>
        </ConteinerImagemFood>
        <ConteinerImagemFood>
            <ImageFood source={require('../../../global/images/Fresh-beef-burger-isolated--6 1.png')}/>
            <TextName>Burger</TextName>
        </ConteinerImagemFood>
        <ConteinerImagemFood>
            <ImageFood source={require('../../../global/images/Fresh-beef-burger-isolated--6 1.png')}/>
            <TextName>Burger</TextName>
        </ConteinerImagemFood>
    </Conteiner>
  );
}
