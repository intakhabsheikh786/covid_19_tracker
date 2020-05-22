import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from '../common/buttons';
import { colors } from '../styles/style'
class ContactToDepartment extends Component {
    state = {}
    render() {
        return (
            <View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <View>
                        <Text style={{
                            color: "white",
                            fontWeight: 'bold',
                            letterSpacing: 0.5,
                            fontSize: 25,
                        }}>Covid-19</Text>
                    </View>
                    <View>
                        <Text>Dropdown</Text>
                    </View>
                </View>


                <View>
                    <Text style={{
                        color: "white",
                        fontWeight: 'bold',
                        letterSpacing: 0.5,
                        fontSize: 16.5,
                        marginTop: 30
                    }} >Are You feeling seek ?</Text>
                    <Text style={{
                        color: colors.paragraph, letterSpacing: 0.5, fontSize: 14,
                        marginTop: 5
                    }} >If you feel seek with any kind of covid19
            symptoms then immideately call or send messsag.</Text>
                    <Text style={{ color: 'white', fontSize: 16.5, textDecorationLine: 'underline' }}>See symptoms</Text>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <CustomButton name={'Call Now'} icon={'md-call'} type={colors.button_primary} />
                        <CustomButton name={'Send SMS'} icon={'md-chatboxes'} type={colors.button_secondary} />
                    </View>
                </View>

            </View>

        );
    }
}

export default ContactToDepartment;