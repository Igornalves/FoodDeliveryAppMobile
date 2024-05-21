import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { createDrawerNavigator } from '@react-navigation/drawer'

import  TabRoutes  from './tab.routes'
import Slidebar from '../Components/Slidebar';
import Settings from '../pages/Settings';
import Account from '../pages/Account';
import Order from '../pages/Order';
import theme from '../global/style/theme';
import Locetion from '../pages/Locetion';

export const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator 
        drawerContent={props => <Slidebar {...props}/>}
        screenOptions={{
            headerShown: false,
            drawerActiveTintColor: theme.colors.Black,
            drawerInactiveTintColor: theme.colors.DarkGray,
            // drawerHideStatusBarOnOpen: true,
        }}
        initialRouteName=''
        >
            <Drawer.Screen
                name='Home-Drawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='wallet-outline' color={color} size={size}/>,
                    drawerLabel:'Payment Methods',
                }}
            />
            <Drawer.Screen
                name='Rewards-and-Offers-Drawer'
                component={Locetion}
                options={{
                    drawerIcon: ({size,color}) => <SimpleLineIcons name='present' color={color} size={size}/>,
                    drawerLabel:'Rewards and Offers'
                }}
            />
            <Drawer.Screen
                name='order-Drawer'
                component={Order}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='wallet-outline' color={color} size={size}/>,
                    drawerLabel:'Order'
                }}
            />
            <Drawer.Screen
                name='settings-Drawer'
                component={Settings}
                options={{
                    drawerIcon: ({size,color}) => <Ionicons name='settings-outline' color={color} size={size}/>,
                    drawerLabel:'Settings'
                }}
            />
            <Drawer.Screen
                name='account-Drawer'
                component={Account}
                options={{
                    drawerIcon: ({size,color}) => <MaterialCommunityIcons name='account-outline' color={color} size={size}/>,
                    drawerLabel:'Account'
                }}
            />
        </Drawer.Navigator>
    );
}
