import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Stack from './stack.routes'
import  TabRoutes  from './tab.routes'
import Slidebar from '../Components/Slidebar';
import TitleSlideBar from '../Components/titleSlideBar';

export const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator 
        drawerContent={props => <Slidebar {...props}/>}
        screenOptions={{
            headerShown: false,
            headerTitle: props => <TitleSlideBar {...props}/>,
            drawerStyle: { 
                // borderRadius: 20,
                // position: 'absolute',
            },
        }}>
            <Drawer.Screen
                name='account-Drawer'
                component={Stack}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='account-outline' color={color} size={size}/>,
                    drawerLabel:'Account'
                }}
            />
            <Drawer.Screen
                name='settings-Drawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='settings-outline' color={color} size={size}/>,
                    drawerLabel:'Settings'
                }}
            />
            <Drawer.Screen
                name='browse-Drawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='wallet-outline' color={color} size={size}/>,
                    drawerLabel:'Wallet'
                }}
            />
            <Drawer.Screen
                name='carts-Drawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='notifications-outline' color={color} size={size}/>,
                    drawerLabel:'Notifications'
                }}
            />
            <Drawer.Screen
                name='-Drawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <AntDesign name='hearto' color={color} size={size}/>,
                    drawerLabel:'Favourite'
                }}
            />
        </Drawer.Navigator>
    );
}
