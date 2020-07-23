import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
} from 'react-native';
import {Colors} from '../Assets/Colors';

export default function FavoritesScreen() {
    return (
        <SafeAreaView style={styles.container}>
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
