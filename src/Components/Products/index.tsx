import React from 'react';
import { 
    Conteiner,
    ConteinerTop,
    Text,
    TextSecundary,
    ConteinerProductsList
} from './style';
import { ListProductsScollView } from './ListProduct/ListProduct';
import TypeProduct from './TypeProduct';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Products() {
  return (
    <Conteiner>
      <ConteinerTop>
        <Text>Bestsellers</Text>
        <TouchableOpacity activeOpacity={0.2}>
          <TextSecundary>See all</TextSecundary>
        </TouchableOpacity>
      </ConteinerTop>
      <ListProductsScollView>
        <ConteinerProductsList>
          <TypeProduct/>
          <TypeProduct/>
          <TypeProduct/>
          <TypeProduct/>
          <TypeProduct/>
          <TypeProduct/>
          <TypeProduct/>
          <TypeProduct/>
          <TypeProduct/>
        </ConteinerProductsList>
      </ListProductsScollView>
    </Conteiner>
  );
}
