import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
const Bar = ({ width, height }) => <View style={{ width, height, backgroundColor: 'white', borderRadius: 10, marginTop: 5 }}></View>

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ display: 'flex', width: 40, }} onPress={() => alert("Hello")}>
                <Bar width={35} height={4} />
                <Bar width={30} height={4} />
                <Bar width={25} height={4} />
            </TouchableOpacity>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
})

export default Header;