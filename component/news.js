import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Header from './header';
import MainContent from './main_content';

const NewsScreen = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>News!</Text>
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

export default NewsScreen;