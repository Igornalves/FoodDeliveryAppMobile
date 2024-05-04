import React from "react";
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainPage } from "../pages/mainPage/intex";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            // tabBarActiveTintColor: ,
            // tabBarInactiveTintColor: ,
            tabBarStyle: {
                height: 65,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            }
        }}>
            <Screen 
                name="Home"
                component={MainPage}
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
                name="Home"
                component={MainPage}
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
                name="Home"
                component={MainPage}
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
                name="Home"
                component={MainPage}
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
                name="Home"
                component={MainPage}
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
        </Navigator>
    );
}