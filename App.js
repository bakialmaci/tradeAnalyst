import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './App/Components/Navigation';
import SplashScreen from './App/Views/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Navigation" component={Navigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
