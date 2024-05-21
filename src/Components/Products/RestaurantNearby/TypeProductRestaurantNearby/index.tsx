import React from 'react';
import { 
    Conteiner,
    ImageTop,
    ConteinerTop,
    TextTitule,
    ConteinerIconsAndInformation,
    IconLocation,
    TextIconLocation,
    IconFeed,
    TextIconFeed
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TypeRestaurantNeabyProducts{

}

export default function TypeProductRestaurantNearby() {
  return (
    <TouchableOpacity activeOpacity={0.2}>
        <Conteiner>
            <ConteinerTop>
                <ImageTop source={{ uri: 'https://img.freepik.com/fotos-gratis/macarrao-penne-em-molho-de-tomate-com-frango-e-tomate-em-uma-mesa-de-madeira_2829-19739.jpg?w=900&t=st=1716234286~exp=1716234886~hmac=a1bb05e18cb45c7dec1ad1f63af917f2d6a93bcd3de9d1f5e3b94bb8fcd147e8'}}/>
            </ConteinerTop>
            <TextTitule>Savory Bites Bitro</TextTitule>
            <ConteinerIconsAndInformation>
                <IconLocation name='location-pin'/>
                <TextIconLocation> 15km  </TextIconLocation>
                <IconFeed name='star'/>
                <TextIconFeed> 1.2k</TextIconFeed>
            </ConteinerIconsAndInformation>
        </Conteiner>
    </TouchableOpacity>
  );
}
