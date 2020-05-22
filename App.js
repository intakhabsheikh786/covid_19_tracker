import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Header from './component/header';
import MainContent from './component/main_content'
import TabView from './component/tabview';


const HomeScreen = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#152a73" translucent={true} hidden={false}></StatusBar>
      <Header />
      <MainContent />
    </View>

  );
}


const StatisticScreen = (props) => {
  console.log(props)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Statistic!</Text>
    </View>
  );
}

const NewsScreen = (props) => {
  console.log(props)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>News!</Text>
    </View>
  );
}


const InfoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Info!</Text>
    </View>
  );
}





const Tab = createBottomTabNavigator();



export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator

      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-call" color={color} size={size} />
            ),
          }}

        />
        <Tab.Screen name="Statistic" component={StatisticScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
});
