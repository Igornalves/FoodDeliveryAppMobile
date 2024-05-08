import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
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
                name='Payment-Methods-Drawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='wallet-outline' color={color} size={size}/>,
                    drawerLabel:'Payment Methods'
                }}
            />
            <Drawer.Screen
                name='Rewards-and-Offers-Drawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <SimpleLineIcons name='present' color={color} size={size}/>,
                    drawerLabel:'Rewards and Offers'
                }}
            />
            <Drawer.Screen
                name='Order-Drawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='wallet-outline' color={color} size={size}/>,
                    drawerLabel:'Order'
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
                name='account-Drawer'
                component={Stack}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='account-outline' color={color} size={size}/>,
                    drawerLabel:'Account'
                }}
            />
        </Drawer.Navigator>
    );
}
