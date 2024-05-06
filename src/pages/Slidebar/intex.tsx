import React from 'react';
import { ConteinerTop, ConteinerButtom, SlideMenu } from './style';
import { User } from '../../Components/User/Intex';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { CloseButton } from '../../Components/CloseButton/intex';

export function Slidebar(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ConteinerTop>
        <CloseButton/>
        <User/>
      </ConteinerTop>
      <SlideMenu>Menu</SlideMenu>
      <DrawerItemList {...props}/>
      <ConteinerButtom>

      </ConteinerButtom>
    </DrawerContentScrollView>
  );
}
