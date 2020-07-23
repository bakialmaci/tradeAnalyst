import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import ListItem from '../Components/ListItem';
import Header from '../Components/Header';
import {Colors} from '../Assets/Colors';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.light} barStyle="dark-content"/>
            <Header/>
            <ListItem/>
            <ListItem/>
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
