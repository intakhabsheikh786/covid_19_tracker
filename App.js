import React from "react";
import { View, Dimensions } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./component/home";
import NewsScreen from "./component/news";
import StatisticScreen from "./component//statistic/statistic";
import InfoScreen from "./component/info";
import { colors } from "./styles/style";

const Tab = createBottomTabNavigator();

const CustomView = (props) => {
  const { iconcolor, background, name } = props;
  const icon_view_size = Math.floor(Dimensions.get("window").width / 11);
  return (
    <View
      style={{
        backgroundColor: background,
        width: icon_view_size + 20,
        height: icon_view_size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
      }}
    >
      <Ionicons name={name} color={iconcolor} size={20} />
    </View>
  );
};

const getView = (focused, name) => (
  <CustomView
    background={focused ? colors.primary : "white"}
    iconcolor={focused ? "white" : colors.primary}
    name={name}
  />
);

const getIconView = (route, focused) => {
  let { name } = route;
  if (name === "Home") return getView(focused, "md-home");
  else if (name === "Statistic") return getView(focused, "md-stats");
  else if (name === "News") return getView(focused, "logo-hackernews");
  else if (name === "Info") return getView(focused, "md-information-circle");
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => getIconView(route, focused),
        })}
        tabBarOptions={{ showLabel: false }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Statistic" component={StatisticScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
