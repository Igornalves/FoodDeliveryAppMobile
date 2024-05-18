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
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FoodTypes() {
  return (
      <Conteiner>
        {/* <TouchableOpacity activeOpacity={0.2}> */}
            <ConteinerImagemFood>
                <ImageFoodMeat source={require('../../../global/images/Delicious-fried-chicken-with-french-fries--5 1.png')}/>
                <TextName>Meat</TextName>
            </ConteinerImagemFood>
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity activeOpacity={0.2}> */}
            <ConteinerImagemFood>
                <ImageFoodDrink source={require('../../../global/images/Classy-old-fashioned-holiday-greeting--6 1.png')}/>
                <TextName>Cold drinks</TextName>
            </ConteinerImagemFood>
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity activeOpacity={0.2}> */}
            <ConteinerImagemFood>
                <ImageFoodDessert source={require('../../../global/images/donut_6 1.png')}/>
                <TextName>Dessert</TextName>
            </ConteinerImagemFood>
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity activeOpacity={0.2}> */}
            <ConteinerImagemFood>
                <ImageFoodBurger source={require('../../../global/images/Fresh-beef-burger-isolated--6 1.png')}/>
                <TextName>Burger</TextName>
            </ConteinerImagemFood>
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity activeOpacity={0.2}> */}
            <ConteinerImagemFood>
                <ImageFoodBurger source={require('../../../global/images/Fresh-beef-burger-isolated--6 1.png')}/>
                <TextName>Burger</TextName>
            </ConteinerImagemFood>
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity activeOpacity={0.2}> */}
            <ConteinerImagemFood>
                <ImageFoodDessert source={require('../../../global/images/donut_6 1.png')}/>
                <TextName>Dessert</TextName>
            </ConteinerImagemFood>
        {/* </TouchableOpacity> */}
    </Conteiner>
  );
}
