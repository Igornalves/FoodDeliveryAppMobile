import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import OnboardingScreens from '../pages/OnboardingScreens';
import DrawerRoutes from './drawer.routes';
import Welcome from '../pages/OnboardingScreens/Welcome';
import TopNavigation from '../Components/TopNavigation';
import StapPage from '../pages/StapPage';
import StrapPage2 from '../pages/StapPage/StapPage2';
import StrapPagegoForScreenGetStarted from '../pages/StapPage/StrapPagegoForScreenGetStarted';
import WelcomePageForLogin from '../pages/LoginPage/WelcomePageForLogin';
import CreateLoginPage from '../pages/LoginPage/CreateLoginPage';
import LoginPage from '../pages/LoginPage';

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
            name='Stap'
            component={StapPage}
            />
            <NativeStack.Screen
            name='Stap2'
            component={StrapPage2}
            />
            <NativeStack.Screen
            name='StapGetStarted'
            component={StrapPagegoForScreenGetStarted}
            />
            <NativeStack.Screen
            name='WelcomeForLoginPage'
            component={WelcomePageForLogin}
            />
            <NativeStack.Screen
            name='CreateLoginPage'
            component={CreateLoginPage}
            />
            <NativeStack.Screen
            name='ContinueLoginPage'
            component={LoginPage}
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
            <NativeStack.Screen
            name='accountA'
            component={DrawerRoutes}
            />
        </NativeStack.Navigator>
    );
}
