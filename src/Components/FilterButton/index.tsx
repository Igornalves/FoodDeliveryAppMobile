import React from 'react';
import { 
    Conteiner,
    IconFilter
} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FilterButton() {
  return (
    <TouchableOpacity activeOpacity={0.12}>
        <Conteiner>
            <IconFilter name='equalizer'/>
        </Conteiner>
    </TouchableOpacity>
  );
}
