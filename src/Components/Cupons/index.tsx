import React from 'react';
import { 
  Conteiner,
  Image,
  ConteinerButtomAndText,
  Text,
  TextSub,
  TouchableOpacity,
  TextButtom,
  ConteinerAboutSubText,
  ConteinerPorcentagenForCupon,
  TextPorcentagen,
  TextRub
} from './style';

export default function CuponsMain() {
  return (
      <Conteiner>
        <Image source={require('../../global/images/cupomDesconto.png')}/>
        <ConteinerPorcentagenForCupon>
          <TextPorcentagen>45%</TextPorcentagen>
          <TextRub>off!</TextRub>
        </ConteinerPorcentagenForCupon>
        <ConteinerButtomAndText>
          <Text>Family Feast</Text>
          <ConteinerAboutSubText>
            <TextSub>Special price on our</TextSub>
            <TextSub>family meal bundle!</TextSub>
          </ConteinerAboutSubText>
            <TextButtom>     J15G250</TextButtom>
        </ConteinerButtomAndText>
      </Conteiner>
  );
}
