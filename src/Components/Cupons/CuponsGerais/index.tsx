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


export default function CuponsGerais({ image,porcentagem,TituleCupon,SubText }: CuponsGerais) {
  return (
      <Conteiner>
        <Image source={{ uri: image}}/>
        <ConteinerPorcentagenForCupon>
          <TextPorcentagen>{porcentagem}</TextPorcentagen>
          <TextRub>off!</TextRub>
        </ConteinerPorcentagenForCupon>
        <ConteinerButtomAndText>
          <Text>{TituleCupon}</Text>
          <ConteinerAboutSubText>
            <TextSub>{SubText}</TextSub>
            <TextSub>{SubText}</TextSub>
          </ConteinerAboutSubText>
            <TextButtom>     J15G250</TextButtom>
        </ConteinerButtomAndText>
      </Conteiner>
  );
}
