import React, {useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Svg, {
    Use,
    Image,
} from 'react-native-svg';

import {Colors} from '../Assets/Colors';
import {GetMarketList} from '../Modules/GetMarketList';
import Icon from '../Assets/Images/Icon';

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
            <Icon/>
            <Text style={styles.logoText}>Trade Analyst</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        justifyContent: "center",
        alignItems: "center",
    },
    logoText:{
        position: "absolute",
        bottom: 150,
        fontWeight: "bold",
        fontSize: 28,
    },
});
