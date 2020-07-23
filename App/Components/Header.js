import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Stock Market List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 8,

    },
});
