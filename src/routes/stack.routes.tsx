import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import OnboardingScreens from '../pages/OnboardingScreens';
import DrawerRoutes from './drawer.routes';
import Welcome from '../pages/OnboardingScreens/Welcome';
import TopNavigation from '../Components/TopNavigation';

const NativeStack = createNativeStackNavigator();
  
export default function Stack(){
    return(
        <NativeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Onboarding-Screens'>
            <NativeStack.Screen
                name='Onboarding-Screens'
                component={OnboardingScreens}
            />
            <NativeStack.Screen
            name='Welcome-Stack'
            component={Welcome}
            />
            <NativeStack.Screen
            name='StartScreen'
            component={DrawerRoutes}
            />
            <NativeStack.Screen
            name='HomeT'
            component={DrawerRoutes}
            />
            <NativeStack.Screen
            name='Locetion'
            component={TopNavigation}
            />
        </NativeStack.Navigator>
    );
}
