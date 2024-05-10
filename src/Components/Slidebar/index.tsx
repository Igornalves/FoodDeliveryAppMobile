import React from 'react';
import { ConteinerButtom } from './style';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import  CloseButton  from '../CloseButton';
import User from '../User';
import Logout from '../Logout';

export default function Slidebar(props) {
  return (
    <DrawerContentScrollView {...props}>
        {/* <CloseButton {...props}/> */}
        <User {...props}/>
      <DrawerItemList {...props}/>
      <ConteinerButtom>
          <Logout/>
      </ConteinerButtom>
    </DrawerContentScrollView>
  );
}
