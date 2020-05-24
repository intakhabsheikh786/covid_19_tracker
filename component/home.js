import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Header from "./header";
import CheckUp from "./check_up";
import ContactToDepartment from "./contact_to_department";
import PreventionView from "./prevention_view";
import { colors } from "../styles/style";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#152a73"
        translucent={true}
        hidden={false}
      ></StatusBar>
      <View style={styles.upper}>
        <Header />
        <ContactToDepartment />
      </View>
      <View style={styles.lower}>
        <PreventionView />
        <CheckUp />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
  upper: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: 15,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  lower: {
    flex: 1.3,
  },
});

export default HomeScreen;
