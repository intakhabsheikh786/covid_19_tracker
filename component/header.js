import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../styles/style';
import ContactToDepartment from './contact_to_department';
const Bar = ({ width, height }) => <View style={{ width, height, backgroundColor: 'white', borderRadius: 10, marginTop: 5 }}></View>









class Header extends Component {
    state = {}

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity id="upper" onPress={() => alert("Hello")}>
                    <Bar width={35} height={4} />
                    <Bar width={30} height={4} />
                    <Bar width={25} height={4} />
                </TouchableOpacity>
                <View id="lower" style={styles.lower} >
                    <ContactToDepartment />
                </View>


            </View>);
    }
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: colors.primary,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        height: Math.floor(Dimensions.get('window').height) / 2.2


    },
    lower: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 10,
    }
})

export default Header;