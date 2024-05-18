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
} from '../style';
import { CuponsGerais } from '../../../global/interface/inteface';


export default function CuponsGerais({ image }: CuponsGerais) {
  return (
      <Conteiner>
        <Image source={{ uri: image}}/>
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
