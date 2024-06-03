import React from 'react';
import { 
  Conteiner,
  ConteinerDeliveryAddress,
  Text
} from './style';
import TopNavigationForPages from '../../Components/TopNavigationForPages';
import LocationPoint from '../../Components/LocationPoint';
import MapaLocation from '../../Components/LocationPoint/MapaLocation';
import OrderStatus from '../../Components/LocationPoint/OrderStatus';


export default function Locetion(props) {
  return (
    <Conteiner>
      <TopNavigationForPages TituleT='Tracking    ' IconAccountT='account-outline' {...props}/>
      <ConteinerDeliveryAddress>
        <Text>Delivery Address</Text>
        <LocationPoint/>
      </ConteinerDeliveryAddress>
      {/* <MapaLocation/> */}
      <OrderStatus/>
    </Conteiner>
  );
}
