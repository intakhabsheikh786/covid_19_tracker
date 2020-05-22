import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/style'

class TabView extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text>TabView</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        backgroundColor: colors.primary,
    }
})

export default TabView;