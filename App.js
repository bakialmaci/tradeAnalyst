import React, {useState} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './App/Components/Navigation';
import SplashScreen from './App/Views/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
    const [splash, setSplash] = useState(true);
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={'none'}>
                {splash && !data.length ?
                    <Stack.Screen name="Splash">
                        {props => <SplashScreen {...props} setFavorites={setFavorites} setData={setData} setSplash={setSplash}/>}
                    </Stack.Screen>
                    :
                    <Stack.Screen name="Navigation">
                        {props => <Navigation {...props} Data={data}/>}
                    </Stack.Screen>
                }

            </Stack.Navigator>
        </NavigationContainer>
    );
}
