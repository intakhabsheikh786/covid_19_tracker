import React from 'react';
import { View, StyleSheet, Text } from 'react-native'


const InfoScreen = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Info!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
    },
});

export default InfoScreen;