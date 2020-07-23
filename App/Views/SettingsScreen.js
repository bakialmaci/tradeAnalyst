import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Colors} from '../Assets/Colors';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>Settings!</Text>
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
