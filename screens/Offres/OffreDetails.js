import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
export default function OffreDetails({ navigation }) {
  const salaire =
    navigation.getParam("salaireMin") +
    "-" +
    navigation.getParam("salaireMax") +
    "€";
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{navigation.getParam("title")}</Text>
        <Text style={styles.salaire}>{salaire}</Text>
        <View style={styles.line}>
          <View style={styles.infoline}>
            <Octicons name="location" size={20} color="black" />
            <Text style={styles.info}>{navigation.getParam("location")}</Text>
          </View>
          <View style={styles.infoline}>
            <AntDesign name="tool" size={20} color="black" />
            <Text style={styles.info}>{navigation.getParam("expérience")}</Text>
          </View>
          <View style={styles.infoline}>
            <SimpleLineIcons name="graduation" size={20} color="black" />
            <Text style={styles.info}>{navigation.getParam("étude")}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.little_title}>Mission:</Text>
          <Text style={styles.info}>{navigation.getParam("mission")}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.little_title}>Technologie requis : </Text>
          <Text style={styles.info}>{navigation.getParam("tech")}</Text>
        </View>
        <Button
          title="Communiquer"
          buttonStyle={styles.button}
          titleStyle={styles.buttonContent}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#EBEAEA",
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 5,
  },
  infoline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 5,
    marginHorizontal: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#254151",
    marginBottom: 10,
    marginRight: 60,
  },
  salaire: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#254151",
    marginLeft: 200,
  },
  info: {
    fontSize: 15,
    color: "#254151",
    marginStart: 5,
    lineHeight: 25,
  },
  infoContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  little_title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#254151",
    marginBottom: 10,
    marginStart: 10,
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#254151",
    height: 50,
    width: 250,
    marginTop: 30,
    marginHorizontal: 40,
  },
  buttonContent: {
    color: "white",
    fontSize: 30,
  },
});
