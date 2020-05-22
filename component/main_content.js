import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { colors } from '../styles/style'

const path = {
    distance: require('../assets/prevention/distance.png'),
    mask: require('../assets/prevention/mask.png'),
    cleaning: require('../assets/prevention/cleaning.png')
}

const prevention_msg = {
    distance: 'Avoid close contact',
    mask: 'Clean your hand often',
    cleaning: 'Wear a mask'
}

const getPath = (name) => name == 'distance' ? path.distance : name == 'mask' ? path.mask : name == 'cleaning' ? path.cleaning : null
const getMsg = (name) => name == 'distance' ? prevention_msg.distance : name == 'mask' ? prevention_msg.mask : name == 'cleaning' ? prevention_msg.cleaning : null

const ImageContainer = (props) => {
    const { name } = props;
    return (
        <View style={styles.image_container}>
            <Image source={getPath(name)} style={styles.image} />
        </View>
    );

}

const MsgConatainer = (props) => {
    const { name } = props;
    return (
        <View style={styles.image_container}>
            <Text style={{ fontWeight: 'bold', color: colors.primary, letterSpacing: 0.5, fontSize: 15, }}>
                {getMsg(name)}</Text>
        </View>
    );

}


class MainContent extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: colors.primary,
                    letterSpacing: 1,
                    marginLeft: 10
                }} >
                    Prevention
                </Text>
                <View id="prevention-view" style={styles.prevention_view}>
                    <ImageContainer name={'cleaning'} />
                    <ImageContainer name={'distance'} />
                    <ImageContainer name={'mask'} />
                </View>
                <View id="prevention_msg_view" style={styles.prevention_msg}>
                    <MsgConatainer name={'cleaning'} />
                    <MsgConatainer name={'distance'} />
                    <MsgConatainer name={'mask'} />
                </View>

                <View id="check_view" style={styles.check_view}>
                    <View style={{ flex: 1 }}>
                        <Image style={{ width: 180, height: 180, marginLeft: -40, marginTop: -40 }} source={require('../assets/prevention/eeee.png')} />
                    </View>
                    <View id="msg" style={{ flex: 2 }}>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: 'bold',
                                letterSpacing: 0.5,
                                fontSize: 16.5,
                                marginTop: 10
                            }}
                        >Do your own test</Text>
                        <Text
                            style={{
                                color: colors.paragraph, letterSpacing: 0.5, fontSize: 14,
                                marginTop: 5
                            }}
                        >Follow the intstuction to do your own test</Text>
                    </View>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    conatiner: {
        marginTop: 10,
        paddingHorizontal: 5,
        backgroundColor: 'white',
    },
    prevention_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    prevention_msg: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    image_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
    },
    image: {
        width: Math.floor(Dimensions.get('screen').width) / 5,
        height: Math.floor(Dimensions.get('screen').width) / 5
    },
    check_view: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.primary,
        marginHorizontal: 10,
        borderRadius: 10,
        height: Math.floor(Dimensions.get('window').height) / 6,
        marginTop: 20

    }
})

export default MainContent;