import React from 'react';
import { 
    Conteiner,
    TextTitule,
    Image
} from './style';
import { ListProductsVerticalScollView } from '../../ListProductVertical/ListProductVertical';

export default function OrderStatus() {
  return (
    <Conteiner>
       <TextTitule>Order Status</TextTitule>
            <Image source={require('../../../global/images/OrderStatus.png')}/>
    </Conteiner>
  );
}
