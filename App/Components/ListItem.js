import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {Colors} from '../Assets/Colors';

export default function ListItem({ ad,kod }) {
    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <Text style={styles.title}>{kod}</Text>
                <Text style={styles.description}>{ad}</Text>
            </View>
            <View style={styles.rightSide}>
                <Text style={styles.value}>--</Text>
                <Text style={styles.activity}>--.--%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: Colors.light,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: Colors.sepColor,
    },
    title: {
        fontSize: 18,
    },
    description: {
        fontSize: 14,
        color: Colors.muted,
    },
    leftSide: {
        marginRight: 'auto',
    },
    rightSide: {
        marginLeft: 'auto',
    },
    value: {
        fontSize: 18,
    },
    activity: {
        fontSize: 14,
        color: Colors.green,
    },
});
