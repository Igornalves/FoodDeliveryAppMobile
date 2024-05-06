import React from "react";
import { MaterialIcons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Setting } from "../pages/Setting/intex";
import { Browse } from "../pages/Browse/intex";
import { Cart } from "../pages/Cart/intex";
import { Order } from "../pages/Order/intex";
import { Account } from "../pages/Account/intex";


const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: '#3288F4',
            // tabBarInactiveTintColor: 'white',
            tabBarStyle: {
                height: 73,
                position: 'absolute',
                borderTopWidth: 0,
                backgroundColor: '#000000',
                paddingTop: 10,
                paddingBottom: 15,
                borderRadius: 30,
                bottom: 22,
                left: 10,
                right: 10,          
            }
        }}>
            <Screen 
                name="Settings"
                component={Setting}
                options={{
                    tabBarIcon: (({size,color})=>
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Screen 
                name="Browse"
                component={Browse}
                options={{
                    tabBarIcon: (({size,color})=>
                        <MaterialCommunityIcons
                            name='text-box-search-outline'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Screen 
                name="Carts"
                component={Cart}
                options={{
                    tabBarIcon: (({size,color})=>
                        <Ionicons
                            name='cart-outline'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Screen 
                name="Orders"
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
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: (({size,color})=>
                        <MaterialCommunityIcons
                            name='account-outline'
                            size={size}
                            color={color}
                        />
                    ),
                    
                }}
            />
        </Navigator>
    );
}