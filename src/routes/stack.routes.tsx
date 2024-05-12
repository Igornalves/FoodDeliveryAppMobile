import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Account from '../pages/Account';
import Order from '../pages/Order';
import Settings from '../pages/Settings';
import OnboardingScreens from '../pages/OnboardingScreens';
import { TabRouter } from '@react-navigation/native';
import Home from '../pages/Home';

const NativeStack = createNativeStackNavigator();

export default function Stack(){
    return(
        <NativeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Onboarding-Screens'>
            <NativeStack.Screen
                name='Onboarding-Screens'
                component={OnboardingScreens}
            />
            <NativeStack.Screen
                name='Home-Stack'
                component={Home}
            />
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
