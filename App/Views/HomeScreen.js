import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    FlatList,
} from 'react-native';

import ListItem from '../Components/ListItem';
import Header from '../Components/Header';
import {Colors} from '../Assets/Colors';

export default function HomeScreen({Data}) {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.light} barStyle="dark-content"/>
            <Header title={'Stock Market List'}/>
            <FlatList // TODO: Performance warning on FlatList.
                data={Data}
                renderItem={({item}) =>
                    <ListItem kod={item.kod} ad={item.ad}/>
                }
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
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
