import React from 'react';
import { 
  Conteiner,
  TextTitule,
  Image,
  ConteinerImage,
  ConteinerBody,
  Delivered,
  Date,
  IdOrder,
  Pay,
  Itens,
  ConteinerDateAndItens,
  ConteinerButtom,
  ConteinerIconMoreText,
  Icon,
  ConteinerTop
} from './style';
import { typeProductsOders } from '../../../global/interface/inteface';


export default function TypeMyOrders({ images,TextTitule1,TextTitule2,DateO,IdOrderO,ItensO,PayO,DeliveredO }: typeProductsOders) {
  return (
    <Conteiner>
      <ConteinerImage>
        <Image source={{ uri: images}}/>
      </ConteinerImage>
      <ConteinerBody>
        <ConteinerTop>
          <TextTitule>{TextTitule1}</TextTitule>
          <TextTitule>{TextTitule2}</TextTitule>
        </ConteinerTop>
        <ConteinerDateAndItens>
          <Date>{DateO}</Date>
          <Itens>   {ItensO}</Itens>
        </ConteinerDateAndItens>
        <ConteinerIconMoreText>
          <Delivered>Delivered  </Delivered>
          <Icon name='checkmark-done-outline'/>
        </ConteinerIconMoreText>
      </ConteinerBody>
      <ConteinerButtom>
        <Pay>{PayO}</Pay>
        <IdOrder>{IdOrderO}</IdOrder>
      </ConteinerButtom>
    </Conteiner>
  );
}
