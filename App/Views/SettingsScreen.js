import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {Colors} from '../Assets/Colors';
import Header from '../Components/Header';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Header title={'User Settings'}/>
            <Text>Settings!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        paddingVertical: 8,
    },
});
