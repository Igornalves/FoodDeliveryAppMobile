import React from 'react';
import { 
    Conteiner,
    ConteinerIconPoint,
    Icon,
    TextOne,
    TextTwo
} from './style';

export default function LocationPoint() {
  return (
    <Conteiner>
        <ConteinerIconPoint>
            <Icon name='location-on'/>
        </ConteinerIconPoint>
        <TextOne>123 Main Street</TextOne>
        <TextTwo>Cityville</TextTwo>
    </Conteiner>
  );
}
