import React, {useEffect, useState} from 'react';

import Config from 'react-native-config';

export const GetMarketList = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    fetch(Config.GetMarketURL)
        .then((response) => response.json())
        .then((json) => setList(json.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    return 1;

};
