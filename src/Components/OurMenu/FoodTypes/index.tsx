import React from 'react';
import { 
    Conteiner,
    ConteinerImagemFood,
    ImageFoodMeat,
    ImageFoodDrink,
    ImageFoodDessert,
    ImageFoodBurger,
    TextName,
} from './style';

export default function FoodTypes() {
  return (
      <Conteiner>
        <ConteinerImagemFood>
            <ImageFoodMeat source={require('../../../global/images/Delicious-fried-chicken-with-french-fries--5 1.png')}/>
            <TextName>Meat</TextName>
        </ConteinerImagemFood>
        <ConteinerImagemFood>
            <ImageFoodDrink source={require('../../../global/images/Classy-old-fashioned-holiday-greeting--6 1.png')}/>
            <TextName>Cold drinks</TextName>
        </ConteinerImagemFood>
        <ConteinerImagemFood>
            <ImageFoodDessert source={require('../../../global/images/donut_6 1.png')}/>
            <TextName>Dessert</TextName>
        </ConteinerImagemFood>
        <ConteinerImagemFood>
            <ImageFoodBurger source={require('../../../global/images/Fresh-beef-burger-isolated--6 1.png')}/>
            <TextName>Burger</TextName>
        </ConteinerImagemFood>
        <ConteinerImagemFood>
            {/* <ImageFoodBurger source={require('')}/>
            <TextName>Burger</TextName> */}
        </ConteinerImagemFood>
    </Conteiner>
  );
}
