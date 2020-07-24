import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../Views/HomeScreen';
import FavoritesScreen from '../Views/FavoritesScreen';
import SettingsScreen from '../Views/SettingsScreen';

import {Colors} from '../Assets/Colors';
import {Icons} from '../Assets/Icons';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation({Data}) {
    return (
        <Tab.Navigator
            activeColor={Colors.primary}
            inactiveColor={Colors.muted}
            barStyle={{
                backgroundColor: Colors.light,
                borderTopWidth: 1,
                borderColor: Colors.sepColor,
            }}
        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabel: 'Markets',
                    tabBarIcon: ({color}) => (
                        <Icons.FontAwesome5 name="clipboard-list" color={color} size={24}/>
                    ),
                }}>
                {props => <HomeScreen {...props} Data={Data}/>}
            </Tab.Screen>

            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({color}) => (
                        <Icons.AntDesign name="star" color={color} size={24}/>
                    ),
                }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color}) => (
                        <Icons.MaterialIcons name="settings" color={color} size={24}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
