import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
} from 'react-native';

import {Colors} from '../Assets/Colors';
import Header from '../Components/Header';

export default function FavoritesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Favorites Market List'}/>
            <Text>Favorites!</Text>
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
