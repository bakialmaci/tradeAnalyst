import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {Colors} from '../Assets/Colors';

import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';

const GetMarketList = async () => {
    const storeData = async (value) => {
        try {
            const res = await AsyncStorage.getItem('MarketList');
            if (value === null) {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem('MarketList', jsonValue);
                console.log("Data Successfully Stored!");
                return jsonValue
            }else{
                console.log("Data Already Stored!");
                return res
            }

        } catch (e) {
            console.log('Store Data Error', e);
        }
    };

    const getData = async () => {
        try {
            return await AsyncStorage.getItem('MarketList');
        } catch (e) {
            console.log('Read Data Error', e);
        }
    };

    getData().finally(res => {
        if(res){
            console.log("Response is not Null!");
            {return res}
        }else{
            console.log("Response is Null!");
            return (
                fetch(Config.GetMarketURL)
                    .then((response) => response.json())
                    .then((json) => storeData(json.data))
                    .catch((error) => console.error(error))
                // .finally(() => setLoading(false))
            );
        }
    })
}

export default function SplashScreen() {
    const [list, setList] = useState(null);

    GetMarketList().then(r => setList(r))

    useEffect(() => {
        console.log(list," !!!!");
    }, [list]);

    return (
        <View>

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
