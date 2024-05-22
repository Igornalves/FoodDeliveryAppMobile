import React from 'react';
import { 
    Conteiner,
    ConteinerTop,
    Text,
    TextSecundary,
    ConteinerProductsList
} from './style';
import TypeProductBestsellers from './TypeProductBestsellers';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Bestsellers(props) {
  return (
    <Conteiner>
      <ConteinerTop>
        <Text>Bestsellers</Text>
        <TouchableOpacity activeOpacity={0.2}>
          <TextSecundary>See all</TextSecundary>
        </TouchableOpacity>
      </ConteinerTop>
      <ConteinerProductsList>
        <TypeProductBestsellers 
        TituleI='Bacon Bliss Bomb...' 
        TextI='30 min' 
        TextFeedI='1.2k' 
        PayI='$20.99' 
        // DiscontI='10%off' 
        imageI='https://img.freepik.com/fotos-premium/hamburger-delicioso_62847-301.jpg?w=996'
        />
        <TypeProductBestsellers 
        TituleI='Bacon Bliss Bomb...' 
        TextI='15 min' 
        TextFeedI='1.8k' 
        PayI='$15.99' 
        DiscontI='10%off' 
        imageI='https://img.freepik.com/fotos-premium/frango-saltado-de-comida-peruana-batata-frita-frango-temperado-cebola-tomate-legumes-assados-arros-brancos-em-um-prato-branco_136753-116.jpg?w=826'
        />
        <TypeProductBestsellers 
        TituleI='Bacon Bliss Bomb...' 
        TextI='45 min' 
        TextFeedI='4.5k' 
        PayI='$55.50' 
        DiscontI='10%off' 
        imageI='https://img.freepik.com/fotos-gratis/pizza-havaiana_1203-2455.jpg?w=996&t=st=1716048672~exp=1716049272~hmac=626376497d319deac3f5baad2eb8ec0122cb8261ab157531c87924b6734eb029'
        />
        <TypeProductBestsellers 
        TituleI='Bacon Bliss Bomb...' 
        TextI='35 min' 
        TextFeedI='2.7k' 
        PayI='$25.80' 
        // DiscontI='10%off' 
        imageI='https://img.freepik.com/fotos-premium/delicia-saborosa-um-hamburguer-gourmet-e-batatas-fritas-crocantes-num-prato-de-madeira-rustico_915596-11796.jpg?w=826'
        />
      </ConteinerProductsList>
    </Conteiner>
  );
}
