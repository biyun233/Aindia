import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import CardUser from "../components/CardUser";

export default function StudiesUserDetails({ navigation }) {
    return (
      <View style={styles.container}>
        <CardUser>
          <Text style={styles.text}>Domaine : </Text>
          <Text>{navigation.getParam("domaine")}</Text>
        </CardUser>
        <CardUser>
          <Text style={styles.text}>Filière de la Formation : </Text>
          <Text>{navigation.getParam("category")}</Text>
        </CardUser>
        <CardUser>
          <Text style={styles.text}>Niveau : </Text>
          <Text>{navigation.getParam("level")}</Text>
        </CardUser>
        <CardUser>
          <Text style={styles.text}>Établissement : </Text>
          <Text>{navigation.getParam("school")}</Text>
        </CardUser>
        <CardUser style={styles.text}>
          <Text style={styles.text}>Années : </Text>
          <Text>{navigation.getParam("date")}</Text>
        </CardUser>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#254151",
    marginTop: Constants.statusBarHeight,
  },
  text: {
      marginBottom: 8,
      fontWeight: 'bold'
  },
});
