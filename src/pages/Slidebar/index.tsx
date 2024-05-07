import React from 'react';
import { ConteinerTop, ConteinerButtom, SlideMenu } from './style';
import User  from '../../Components/User';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import  CloseButton  from '../../Components/CloseButton';

export default function Slidebar(props) {
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
