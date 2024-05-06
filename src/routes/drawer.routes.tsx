import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import Stack from './stack.routes'
import { TabRoutes } from './tab.routes'
import { Slidebar } from '../pages/Slidebar/intex';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator 
        drawerContent={props => <Slidebar {...props}/>}
        screenOptions={{
            title: '',
            
        }}
        >
            <Drawer.Screen
                name='settings-native'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='text-box-outline' color={color} size={size}/>,
                    drawerLabel:'History'
                }}
            />
            <Drawer.Screen
                name='browse-native'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='wallet-outline' color={color} size={size}/>,
                    drawerLabel:'Wallet'
                }}
            />
            <Drawer.Screen
                name='carts-native'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='notifications-outline' color={color} size={size}/>,
                    drawerLabel:'Notifications'
                }}
            />
            <Drawer.Screen
                name='-native'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <AntDesign name='hearto' color={color} size={size}/>,
                    drawerLabel:'Favourite'
                }}
            />
            <Drawer.Screen
                name='account-native'
                component={Stack}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='account-outline' color={color} size={size}/>,
                    drawerLabel:'Account'
                }}
            />
        </Drawer.Navigator>
    );
}
