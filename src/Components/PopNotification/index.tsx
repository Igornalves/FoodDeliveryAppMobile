import React from 'react';
import { 
    Conteiner,
    ConteinerOfTextAndInformation,
    Image,
    TextTitule,
    SubText1,
    SubText2,
    Time,
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PopNotificationType } from '../../global/interface/inteface';

export default function PopNotification({ ImageP,subTxt1,subTxt2,timeP,tituleP }: PopNotificationType) {
  return (
    <TouchableOpacity activeOpacity={0.2}>
        <Conteiner>
                <Image source={{uri: ImageP}}/>
            <ConteinerOfTextAndInformation>
                <TextTitule>{tituleP}</TextTitule>
                <SubText1>{subTxt1}</SubText1>
                <SubText2>{subTxt2}</SubText2>
            </ConteinerOfTextAndInformation>
            <Time>{timeP}</Time>
        </Conteiner>
    </TouchableOpacity>
  );
}
