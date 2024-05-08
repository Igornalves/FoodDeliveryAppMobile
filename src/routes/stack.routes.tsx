import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Account from '../pages/Account';

const NativeStack = createNativeStackNavigator();

export default function Stack(){
    return(
        <NativeStack.Navigator screenOptions={{ headerShown: false }}>
            <NativeStack.Screen
                name='account-stack'
                component={Account}
            />
            <NativeStack.Screen
                name='PaymentMethods-stack'
                component={Account}
            />
        </NativeStack.Navigator>
    );
}
