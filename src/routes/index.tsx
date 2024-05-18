import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Stack from './stack.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
}
