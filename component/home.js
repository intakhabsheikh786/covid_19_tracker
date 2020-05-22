import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native'
import Header from './header';
import MainContent from './main_content';
import ContactToDepartment from './contact_to_department';
import PreventionView from './prevention_view';
import { colors } from '../styles/style';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#152a73" translucent={true} hidden={false}></StatusBar>
            <View style={styles.upper}>
                <Header />
                <ContactToDepartment />
            </View>
            <View>
                <PreventionView />
                <MainContent />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',

        backgroundColor: '#fff',
        paddingTop: 24,
    },
    upper: {
        backgroundColor: colors.primary,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },

});

export default HomeScreen;