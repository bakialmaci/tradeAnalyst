import React, {useState, useEffect} from 'react';

import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';

function GetMarketList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('MarketList', jsonValue);
            setData(jsonValue);
            console.log('Data Successfully Set.');
        } catch (e) {
            console.log('Store Data Error', e);
        }
    };


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('MarketList');
            return jsonValue != null ? JSON.parse(jsonValue) : false;
        } catch (e) {
            console.log('Read Data Error', e);
        }
    };

    async function GetMarketLists() {
        let isDataSet = await getData();
        if (isDataSet) {
            console.log('Data Already Set.');
            setData(isDataSet);
            setLoading(false);
        } else {
            await fetch(Config.GetMarketURL)
                .then((response) => response.json())
                .then((json) => storeData(json.data))
                .then(setLoading(false))
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    useEffect(() => {
        GetMarketLists().catch((error => console.log(error)));
    }, []);

    return [data, loading];
}

export {GetMarketList};
