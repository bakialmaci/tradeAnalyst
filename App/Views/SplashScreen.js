import React, {useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {Colors} from '../Assets/Colors';
import {GetMarketList} from '../Modules/GetMarketList';

export default function SplashScreen({setSplash,setData}) {
    const [data,loading] = GetMarketList();

    useEffect(() => {
        if(!loading && data.length){
            setData(data)
            setSplash(loading);
        }
    }, [data,loading]);

    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
});
