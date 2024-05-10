import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Account from '../pages/Account';
import Order from '../pages/Order';
import Settings from '../pages/Settings';

const NativeStack = createNativeStackNavigator();

export default function Stack(){
    return(
        <NativeStack.Navigator screenOptions={{ headerShown: false }}>
            <NativeStack.Screen
                name='settings-stack'
                component={Settings}
            />
            <NativeStack.Screen
                name='account-stack'
                component={Account}
            />
            <NativeStack.Screen
                name='order-stack'
                component={Order}
            />
        </NativeStack.Navigator>
    );
}
