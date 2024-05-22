import React from 'react';
import { 
    Conteiner,
    ConteinerIconPoint,
    Icon,
    TextOne,
    TextTwo,
    ConteinerTexts
} from './style';

export default function LocationPoint() {
  return (
    <Conteiner>
        <ConteinerIconPoint>
            <Icon name='location-on'/>
        </ConteinerIconPoint>
        <ConteinerTexts>
          <TextOne>123 Main Street</TextOne>
          <TextTwo>Cityville</TextTwo>
        </ConteinerTexts>
    </Conteiner>
  );
}
