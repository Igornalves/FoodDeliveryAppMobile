import React from 'react';
import { ConteinerButtom } from './style';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import User from './User';
import Logout from './Logout';

export default function Slidebar(props) {
  return (
    <DrawerContentScrollView {...props}>
        <User {...props}/>
      <DrawerItemList {...props}/>
      <ConteinerButtom>
        <Logout {...props}/>
      </ConteinerButtom>
    </DrawerContentScrollView>
  );
}
