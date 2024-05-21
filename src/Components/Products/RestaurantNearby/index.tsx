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
        <TypeProductRestaurantNearby
        TextIconFeedR='1.2k'
        TextIconLocationR='15km'
        TextTituleR='Savory Bite bisto'
        imagesR='https://img.freepik.com/fotos-gratis/macarrao-penne-em-molho-de-tomate-com-frango-e-tomate-em-uma-mesa-de-madeira_2829-19739.jpg?w=900&t=st=1716234286~exp=1716234886~hmac=a1bb05e18cb45c7dec1ad1f63af917f2d6a93bcd3de9d1f5e3b94bb8fcd147e8'
        mostraDesconto 
        />
        <TypeProductRestaurantNearby
        TextIconFeedR='5.8k'
        TextIconLocationR='20km'
        TextTituleR='Savory Bite bisto'
        imagesR='https://img.freepik.com/fotos-gratis/delicioso-goulash-pronto-para-o-jantar_23-2149370835.jpg?t=st=1716317729~exp=1716321329~hmac=70d3c7d89a796ed26f7d315998a56b8bc0c88d816dfc7acffbf565f771974552&w=360'
        mostraDesconto 
        />
        <TypeProductRestaurantNearby
        TextIconFeedR='8.0k'
        TextIconLocationR='10km'
        TextTituleR='Savory Bite bisto'
        imagesR='https://img.freepik.com/fotos-gratis/cafe-de-alto-angulo-rodeado-de-cookies_23-2148229152.jpg?t=st=1716317676~exp=1716321276~hmac=4cbf117161a3973ec741528113a5366d6ef2246cc70d344b9d6bdc1b28737ba6&w=360'
        // mostraDesconto 
        />
        <TypeProductRestaurantNearby
        TextIconFeedR='3.5k'
        TextIconLocationR='35km'
        TextTituleR='Savory Bite bisto'
        imagesR='https://img.freepik.com/fotos-premium/kebabs-de-mussarela-e-coracao-de-frango_556177-792.jpg?w=996'
        // mostraDesconto 
        />
      </ListProductsHorizontalScollView>
    </Conteiner>
  );
}
