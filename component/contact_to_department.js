import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton } from '../common/buttons';
import { colors } from '../styles/style';
import DropDown from '../common/dropdown';
import { country_list as DATA } from '../common/data';

const Upper = () => {
    return (
        <View style={styles.upper_view}>
            <View>
                <Text style={{
                    color: "white",
                    fontWeight: 'bold',
                    letterSpacing: 0.5,
                    fontSize: 25,
                }}>Covid-19</Text>
            </View>
            <View>
                <DropDown data={DATA} selected_item={"Choose country"} />
            </View>
        </View>
    );

}

const Middle = () => {
    return (
        <View>
            <Text style={styles.middle_view_text_1} >Are You feeling seek ?</Text>
            <Text style={styles.middle_view_text_2} >If you feel seek with any kind of covid19
            symptoms then immideately call or send messsag.</Text>
            <Text style={styles.middle_view_text_3}>See symptoms</Text>
        </View>
    );
}

const Lower = () => {
    return (
        <View style={styles.lower_view}>
            <CustomButton name={'Call Now'} icon={'md-call'} type={colors.button_primary} />
            <CustomButton name={'Send SMS'} icon={'md-chatboxes'} type={colors.button_secondary} />
        </View>
    );
}


const ContactToDepartment = () => {
    return (
        <View>
            <Upper />
            <Middle />
            <Lower />
        </View>

    );
}


const styles = StyleSheet.create({
    upper_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    middle_view_text_1: {
        color: "white",
        fontWeight: 'bold',
        letterSpacing: 0.5,
        fontSize: 16.5,
        marginTop: 15
    },
    middle_view_text_2: {
        color: colors.paragraph, letterSpacing: 0.5, fontSize: 14,
        marginTop: 5,
    },
    middle_view_text_3: {
        color: 'white', fontSize: 16.5, textDecorationLine: 'underline'
    },
    lower_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }

})


export default ContactToDepartment;