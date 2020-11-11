import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

class UpdateUser extends Component {
  constructor(props) {
    super();
    this.state = {
      firstname: props.navigation.state.params.firstname,
      lastname: props.navigation.state.params.lastname,
      status: props.navigation.state.params.status,
      level: props.navigation.state.params.level,
      school: props.navigation.state.params.school,
      location: props.navigation.state.params.location,
      country: props.navigation.state.params.country,
    };
  }

  inputValueUpdate = (value) => {
    this.setState({ firstname: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ lastname: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ status: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ level: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ school: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ location: value });
  };

  inputValueUpdate = (value) => {
    this.setState({ country: value });
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
        <Text style={styles.aindia}>
          {this.state.firstname} {this.state.lastname}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "firstname")}
          value={this.state.firstname}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "lastname")}
          value={this.state.lastname}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "status")}
          value={this.state.status}
        />
        <TextInput
          style={styles.input}
          multiline
          onChangeText={(value) => this.inputValueUpdate(value, "level")}
          value={this.state.level}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "school")}
          value={this.state.school}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "location")}
          value={this.state.location}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.inputValueUpdate(value, "country")}
          value={this.state.country}
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

export default UpdateUser;
