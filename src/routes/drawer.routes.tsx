import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'
import Stack from './stack.routes'
import { AppRoutes } from './tab.routes'
import { Account } from '../pages/Account/intex';
import { Setting } from '../pages/Setting/intex';
import { Browse } from '../pages/Browse/intex';
import { Cart } from '../pages/Cart/intex';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{
            title: '',
        }}>
            <Drawer.Screen
                name='account-native'
                component={Account}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='account-outline' color={color} size={size}/>,
                    drawerLabel:'Account'
                }}
            />
            <Drawer.Screen
                name='settings-native'
                component={Setting}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='text-box-outline' color={color} size={size}/>,
                    drawerLabel:'History'
                }}
            />
            <Drawer.Screen
                name='browse-native'
                component={Browse}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='wallet-outline' color={color} size={size}/>,
                    drawerLabel:'Wallet'
                }}
            />
            <Drawer.Screen
                name='carts-native'
                component={Cart}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='notifications-outline' color={color} size={size}/>,
                    drawerLabel:'Notifications'
                }}
            />
            <Drawer.Screen
                name='-native'
                component={Setting}
                options={{
                    drawerIcon: ({size,color}) => <AntDesign name='hearto' color={color} size={size}/>,
                    drawerLabel:'Favourite'
                }}
            />
        </Drawer.Navigator>
    );
}
