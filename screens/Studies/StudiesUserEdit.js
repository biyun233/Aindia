import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

class StudiesUserEdit extends Component {
  constructor(props) {
    super();
    this.state = {
      domaine: props.navigation.state.params.domaine,
      level: props.navigation.state.params.level,
      category: props.navigation.state.params.category,
      school: props.navigation.state.params.school,
      date: props.navigation.state.params.date,
    };
  }

  inputValueUpdate = (value) => {
    this.setState({ domaine: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ level: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ category: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ school: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ date: value });
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.aindia}>
          {this.state.level} {this.state.date}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          onChangeText={(value) => this.inputValueUpdate(value, "domaine")}
          value={this.state.domaine}
        />
        <TextInput
          style={styles.input}
          placeholder="Niveau"
          onChangeText={(value) => this.inputValueUpdate(value, "level")}
          value={this.state.level}
        />
        <TextInput
          style={styles.input}
          placeholder="Filière"
          onChangeText={(value) => this.inputValueUpdate(value, "category")}
          value={this.state.category}
        />
        <TextInput
          style={styles.input}
          placeholder="Établissement"
          onChangeText={(value) => this.inputValueUpdate(value, "school")}
          value={this.state.school}
        />
        <TextInput
          style={styles.input}
          placeholder="Années"
          onChangeText={(value) => this.inputValueUpdate(value, "date")}
          value={this.state.date}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          
        >
          <View style={styles.button}>
            <Text style={styles.connexion}>VALIDER</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //important
    backgroundColor: "#254151",
    flexDirection: "column",
    //justifyContent: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowColor: "white",
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  aindia: {
    //textAlign: "center",
    //color: "black",
    fontSize: "bold",
    fontSize: 22,
    marginTop: 2,
    //color: "white",
    marginTop: 70,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 4,
    marginBottom: 18,
  },
  input: {
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginTop: 16,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    width: 160,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 16,
  },

  connexion: {
    color: "black",
    fontSize: 30,
  },
  errorInput: {
    width: "90%",
    color: "red",
    marginLeft: 3,
    marginTop: 5,
  },
});

export default StudiesUserEdit;
