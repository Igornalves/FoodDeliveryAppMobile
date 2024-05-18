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

export default function Products() {
  return (
    <Conteiner>
      <ConteinerTop>
        <Text>Bestsellers</Text>
        <TextSecundary>See all</TextSecundary>
      </ConteinerTop>
      <ListProductsScollView>
        <ConteinerProductsList>
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
