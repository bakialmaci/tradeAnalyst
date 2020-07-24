import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function Header({title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 8,
        marginHorizontal: 16,
    },
});
