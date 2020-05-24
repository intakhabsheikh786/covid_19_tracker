import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView, Dimensions, FlatList, RefreshControl } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from './header';
import { colors } from '../styles/style';
import DropDown from '../common/dropdown';
import { country_list as DATA } from '../common/data';
import SwiperComponent from '../common/swipper';
import { getGlobalData, getCountryData } from '../utils/functions';

import Loading from '../common/loading_screen';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}



const SingleStats = (props) => {
    return (
        <View style={{ ...styles.single_stats_view, backgroundColor: colors[props.color], }}>
            <Text style={styles.single_stats_view_text_1} >{props.num_of_case}</Text>
            <Text style={styles.single_stats_view_text_2} >{props.name}</Text>
        </View>
    )
}



const AllStats = (props) => {
    const { data } = props;
    const { TotalConfirmed, TotalDeaths, TotalRecovered, NewRecovered } = data;

    return (

        <View style={{ display: 'flex' }}>

            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <SingleStats name={'affected'} color={'affected'} num_of_case={TotalConfirmed} />
                <SingleStats name={'death'} color={'death'} num_of_case={TotalDeaths} />

            </View>

            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <SingleStats name={'recover'} color={'recover'} num_of_case={TotalRecovered} />
                <SingleStats name={'active'} color={'active'} num_of_case={TotalConfirmed - (TotalRecovered + TotalDeaths)} />
                <SingleStats name={'new recovered'} color={'new_recovered'} num_of_case={NewRecovered} />
            </View>


        </View>

    )

}

class Statistic extends Component {

    state = {
        date: new Date(),
        yesterday_data: '',

        selected_item_data: '',
        selected_item: 'Global',
        loading: true,
        refreshing: false,
    }

    handleSelect = async (selected_item) => {
        this.setState({ selected_item, loading: true });
        if (selected_item === 'Global') {
            this.setState({ loading: false });
            return this.setGlobalData();
        }

        const data = await getCountryData(selected_item);
        if (data != undefined && !data.err) {
            this.setState({ loading: false })
            return this.setState({ selected_item_data: data })
        }
        return console.log("server error")

    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        const { selected_item } = this.state;
        wait(2000).then(() => {
            this.handleSelect(this.state.selected_item);
            this.setState({ refreshing: false });
        })
    }

    setGlobalData = async () => {
        const data = await getGlobalData();
        if (!data.err) this.setState({ selected_item_data: data })
    }



    async componentDidMount() {
        this.setState({ loading: true })
        this.setGlobalData();
        this.setState({ loading: false })




    }

    loadDataOnSwipe = (variable) => {
        return (
            <Text>{`${5 + variable}`}</Text>
        );
    }


    render() {
        const { date, loading, selected_item_data } = this.state;


        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#152a73" translucent={true} hidden={false}></StatusBar>
                <View style={styles.upper}>
                    <Header />
                    <View id="dropdown_view" style={styles.dropdown_view}>
                        <View id="dropdown" style={{ flex: 1 }}>
                            <DropDown data={DATA} selected_item={"Choose country"} handleSelect={this.handleSelect} />
                        </View>
                        <View id="date_view" style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ color: 'white' }}>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</Text>
                        </View>
                    </View>
                    <View id="horizontal_line" style={styles.horizontal_line}></View>
                    <ScrollView refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                    }>

                        <Swiper style={{ height: (Dimensions.get('screen').height) / 2 - 80 }}>
                            <View>



                                {loading ? <Loading width={100} height={100} /> : <AllStats data={selected_item_data} />}
                            </View>
                            <View>


                                {loading ? <Loading width={100} height={100} /> : <AllStats data={selected_item_data} />}
                            </View>

                            <View>


                                {loading ? <Loading width={100} height={100} /> : <AllStats data={selected_item_data} />}
                            </View>
                        </Swiper>

                    </ScrollView>

                </View>
                <View style={styles.lower}>
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: 24,
    },
    upper: {
        flex: 2,
        // borderWidth: 1,
        // borderColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 20,

    },

    dropdown_view: { display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'space-around' },
    horizontal_line: { height: 1, marginTop: 6, backgroundColor: '#5c5c5c' },
    lower: {
        flex: 1,
        backgroundColor: 'white',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,

    },
    item: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        paddingVertical: 5
    },
    title: {
        paddingHorizontal: 20
    },
    single_stats_view: {
        flex: 1,
        marginRight: 7,
        height: 100,
        borderRadius: 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    single_stats_view_text_1: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    single_stats_view_text_2: {
        textTransform: 'capitalize',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 0.5
    }

});

export default Statistic;
