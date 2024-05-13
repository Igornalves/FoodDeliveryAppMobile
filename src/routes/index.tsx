import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerRoutes from './drawer.routes';
import Stack from './stack.routes';
import TabRoutes from './tab.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
}
