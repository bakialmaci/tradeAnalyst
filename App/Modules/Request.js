import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

const Request = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    // const storeData = async (value) => {
    //     try {
    //         const jsonValue = JSON.stringify(value);
    //         await AsyncStorage.setItem('MarketList', jsonValue);
    //     } catch (e) {
    //         console.log('Store Data Error', e);
    //     }
    // };
    //
    //
    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('MarketList')
    //         if(value !== null) {
    //             // value previously stored
    //             console.log(value);
    //         }
    //     } catch(e) {
    //         console.log('Read Data Error', e);
    //     }
    // }

    const GetMarketList = async () => {
        await fetch(Config.GetMarketURL)
            .then((response) => response.json())
            .then((json) => {
                setList(json.data)
                // storeData(json.data)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        if(!loading)
            return list

    };

    return {
        storeData,
        getData,
        GetMarketList
    }

};

export default Request;
