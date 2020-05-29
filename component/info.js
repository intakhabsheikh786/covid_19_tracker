import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Header from "./header";
import { colors } from "../styles/style";

const AboutView = ({ header, content, url }) => {
  return (
    <View style={{}}>
      <View id="about_header" style={{ flexDirection: "row", padding: 10 }}>
        <Text style={{ fontWeight: "bold", letterSpacing: 0.7, fontSize: 23 }}>
          {header}
        </Text>
        <Ionicons
          style={{ marginLeft: 30, marginTop: 6 }}
          name="ios-arrow-down"
          color={"grey"}
          size={20}
        />
      </View>
      <View
        style={{ borderBottomColor: "grey", borderBottomWidth: 0.3 }}
      ></View>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Text
          onPress={() => Linking.openURL(url)}
          style={{ color: "#4e5450", letterSpacing: 0.7, fontSize: 20 }}
        >
          {`${content} visit`}
        </Text>
      </View>
    </View>
  );
};

const abouts = [
  {
    about: "News API",
    content: "Top headlines news is provided by google news.",
    url: "https://newsapi.org/docs/get-started",
  },
  {
    about: "Covid19 statistic API",
    content:
      "The stats of covid19 cases are provided by covid-19-apis-postman.",
    url: "https://covid-19-apis.postman.com/",
  },
  {
    about: "Source code",
    content: "You can download whole source code from Github",
    url: "https://covid-19-apis.postman.com/",
  },
];

const InfoScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Header />
        <Text style={styles.upper_view_text_1}>About</Text>
      </View>

      {abouts.map((about) => {
        return (
          <AboutView
            key={about.about}
            header={about.about}
            content={about.content}
            url={about.url}
          />
        );
      })}

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          onPress={() =>
            Linking.openURL("https://github.com/intakhabsheikh786")
          }
          style={{ fontSize: 15, color: "grey" }}
        >
          https://github.com/intakhabsheikh786
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
  upper: {
    backgroundColor: colors.primary,
    padding: 17,
  },
  upper_view_text_1: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default InfoScreen;
