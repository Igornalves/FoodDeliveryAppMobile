import React from 'react';
import { Conteiner } from './style';
import MapView , {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default function MapaLocation() {
  return (
    <Conteiner>
        <MapView
            initialRegion={{
                latitude: -5.08921, //posicao geeografica 
                longitude: -42.8016, //posicao geografica
                latitudeDelta: 0.0992, // zoom 
                longitudeDelta: 0.0521, // zoom 
            }}
            style={{width: 353, height: 160, borderRadius: 5}}
            mapType='mutedStandard' //tipo de mapa a ser usando no projeto 
            provider={PROVIDER_GOOGLE} //paga o maga que vai ser usando 
        >
            <Marker 
                coordinate={{latitude: -5.08921 , longitude: -42.8016 }}
                pinColor='#000000'
                description='My City And My home'
            />
        </MapView>
    </Conteiner>
  );
}   
