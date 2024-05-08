import React from 'react';
import { ConteinerTop, ConteinerButtom, SlideMenu } from './style';
import User  from '../User';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import  CloseButton  from '../CloseButton';

export default function Slidebar(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ConteinerTop>
        <CloseButton {...props}/>
        <User {...props}/>
      </ConteinerTop>
      <DrawerItemList {...props}/>
      <ConteinerButtom>

      </ConteinerButtom>
    </DrawerContentScrollView>
  );
}
