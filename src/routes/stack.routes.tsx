import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Account } from '../pages/Account/intex';

const NativeStack = createNativeStackNavigator();

export default function Stack(){
    return(
        <NativeStack.Navigator screenOptions={{ headerShown: false }}>
            <NativeStack.Screen
                name='account-stack'
                component={Account}
            />
        </NativeStack.Navigator>
    );
}
