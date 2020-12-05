import React, { Component, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  StatusBar,
  LogBox,
} from "react-native";
import FiltreItem from "../components/FiltreItem";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-community/async-storage";

export default class Filtrer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etude: [
        { text: "Peu importe", key: "1", select: "false", id: "etude" },
        { text: "- de bac +3", key: "2", select: "false", id: "etude" },
        { text: "bac +3 ", key: "3", select: "false", id: "etude" },
        { text: "bac +4", key: "4", select: "false", id: "etude" },
        { text: "bac +5 ou +", key: "5", select: "false", id: "etude" },
      ],
      experience: [
        { text: "Stagiaire", key: "1", select: "false", id: "experience" },
        { text: "moins de 1 an", key: "2", select: "false", id: "experience" },
        { text: "plus de 1 an ", key: "3", select: "false", id: "experience" },
        { text: "de 3 à 5 ans", key: "4", select: "false", id: "experience" },
        { text: "plus de 5 ans", key: "5", select: "false", id: "experience" },
      ],
      location: "",
    };
  }

  handle = (item, state) => {
    let prev = [...state];
    for (let i = 0; i < prev.length; i++) {
      if (prev[i] === item) {
        if (prev[i].select == "true") {
          prev[i].select = "false";
        } else if (prev[i].select == "false") {
          prev[i].select = "true";
          for (let j = 0; j < prev.length; j++) {
            if (j != i) {
              prev[j].select = "false";
            }
          }
        }
      }
    }
    this.setState({ state: prev });
  };
  pressHandler = (item) => {
    switch (item.id) {
      case "etude":
        this.handle(item, this.state.etude);
        break;
      case "experience":
        this.handle(item, this.state.experience);
        break;
    }
  };

  updateLocation = (value) => {
    this.setState({ location: value });
  };
  onSubmit = async () => {
    try {
      for (let i = 0; i < this.state.etude.length; i++) {
        if (this.state.etude[i].select == "true") {
          await AsyncStorage.setItem("etude", this.state.etude[i].text);
        }
        if (this.state.experience[i].select == "true") {
          await AsyncStorage.setItem(
            "experience",
            this.state.experience[i].text
          );
        }
      }
      await AsyncStorage.setItem("location", this.state.location);
      this.props.navigation.goBack();
      this.props.navigation.state.params.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <StatusBar barStyle="dark-content" />
          <View style={styles.content}>
            <View style={styles.list}>
              <Text style={styles.title}>Niveau d'études</Text>
              <FlatList
                keyExtractor={(item) => item.key}
                numColumns={2}
                data={this.state.etude}
                renderItem={({ item }) => (
                  <FiltreItem item={item} pressHandler={this.pressHandler} />
                )}
              />

              <Text style={styles.title}>Niveau d'expériences</Text>
              <FlatList
                keyExtractor={(item) => item.key}
                numColumns={2}
                data={this.state.experience}
                renderItem={({ item }) => (
                  <FiltreItem item={item} pressHandler={this.pressHandler} />
                )}
              />

              <Text style={styles.title}>Ville</Text>
              <TextInput
                style={styles.input}
                value={this.state.location}
                onChangeText={this.updateLocation}
              />
              <Button
                title="Filtrer"
                buttonStyle={styles.button}
                titleStyle={styles.appliquer}
                onPress={this.onSubmit}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#EBEAEA",
  },
  content: {
    padding: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#254151",
    marginBottom: 10,
  },
  list: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    height: 30,
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#254151",
    height: 50,
    width: 250,
    marginTop: 50,
    marginHorizontal: 40,
  },
  appliquer: {
    color: "white",
    fontSize: 30,
  },
});
