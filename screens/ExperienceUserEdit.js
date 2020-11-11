import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";


class ExperienceUserEdit extends Component {
  constructor(props) {
    super();
    this.state = {
      domaine: props.navigation.state.params.domaine,
      responsability: props.navigation.state.params.responsability,
      Organization: props.navigation.state.params.Organization,
      description: props.navigation.state.params.description,
      duration: props.navigation.state.params.duration,
      date: props.navigation.state.params.date,
    };
  }

  inputValueUpdate = (value) => {
    this.setState({ domaine: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ responsability: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ Organization: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ description: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ duration: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ date: value });
  };

  /*
  handleEditItem = (editedItem) => {
    const NewData = this.state.data.map( item => {
      if (item.id === editedItem) {
        item.value = this.state.textInput;
        return item;
      }
    });
    this.setState({ data: NewData });
  };
   */

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.aindia}>Édition De Mon Stage</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "domaine")}
          value={this.state.domaine}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            this.inputValueUpdate(value, "responsability")
          }
          value={this.state.responsability}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "Organization")}
          value={this.state.Organization}
        />
        <TextInput
          style={styles.input}
          multiline
          onChangeText={(value) => this.inputValueUpdate(value, "description")}
          value={this.state.description}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "duration")}
          value={this.state.duration}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "date")}
          value={this.state.date}
        />
        <TouchableOpacity style={styles.buttonStyle}>
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
    marginTop: 18,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 4,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    width: 295,
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

export default ExperienceUserEdit;
