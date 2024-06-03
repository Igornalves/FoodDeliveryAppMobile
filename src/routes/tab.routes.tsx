import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import Octicons from '@expo/vector-icons/Octicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home  from "../pages/Home";
import  Notification  from "../pages/Notification";
import  Order  from "../pages/Order";
import Locetion from "../pages/Locetion";

import theme from "../global/style/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Navigator 
        screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: theme.colors.Black,
            tabBarInactiveTintColor: theme.colors.DarkGray,
            tabBarStyle: {
                height: 75,
                // position: 'absolute',
                // borderTopWidth: 0,
                // backgroundColor: theme.colors.White',
                paddingTop: 10,
                paddingBottom: 15,
                // borderRadius: 30,
                // bottom: 22,
                // left: 10,
                // right: 10,          
            }
        }}>
            <Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({size,color})=> 
                        <Octicons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Screen 
                name="Order"
                component={Order}
                options={{
                    tabBarIcon: (({size,color})=>
                    <MaterialCommunityIcons
                    name='text-box-outline'
                    size={size}
                    color={color}
                    />
                ),
            }}
            />
            <Screen 
                name="Notifi"
                component={Notification}
                options={{
                    tabBarIcon: (({size,color})=>
                        <Ionicons
                            name='notifications-outline'
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarBadge: 3
                }}
            />
            <Screen 
                name="Locetion"
                component={Locetion}
                options={{
                    tabBarIcon: (({size,color})=>
                        <Ionicons
                            name='location-outline'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Navigator>
    );
}