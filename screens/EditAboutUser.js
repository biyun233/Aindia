import React, { Component } from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Firebase } from "../utils/Firebase";

class EditAboutUser extends Component {
  // Cette fonction permet de naviguer de cet écran à un autre en fonction du paramtètre donné
  // Quand elle sera appelée
  //const pressHandler = () => {
  //navigation.goBack();
  //navigation.push('Accueil');

  constructor(props) {
    super();
    this.state = {
      key: props.navigation.state.params.key,
      about: props.navigation.state.params.about,
      AuthId: props.navigation.state.params.AuthId,
      isLoading: true,
    };
  }

  inputValueUpdate = (value, prop) => {
    const state = this.state;
    state[prop] = value;
    this.setState(state);
  };

  updateAboutUser() {
    this.setState({ isLoading: true });

    const UpdateDBRef = Firebase.firestore()
      .collection("aboutUsers")
      .doc(this.state.key);

    UpdateDBRef.set({
      about: this.state.about,
      AuthId: this.state.AuthId,
    })
      .then((docRef) => {
        alert("Vos modifications ont bien été Sauvegarder ! ");
        this.props.navigation.navigate("ProfilScreen");
      })
      .catch((error) => {
        alert("Vos modifications n'ont pas été sauvegarder ! ");
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.aindia}>Aindia</Text>

        <TextInput
          style={styles.input}
          multiline
          numberOfLines={14}
          placeholder="À Propos de vous..."
          //onChangeText={props.handleChange("about")}
          value={this.state.about}
          onChangeText={(value) => this.inputValueUpdate(value, "about")}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.updateAboutUser()}
        >
          <View style={styles.button}>
            <Text style={styles.connexion}>VALIDER</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// Définition des Styles appliqués sur l'interface RegisterUser
const styles = StyleSheet.create({
  container: {
    flex: 1, //important
    backgroundColor: "white",
    flexDirection: "column",
    //justifyContent: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
  aindia: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    marginTop: 5,
    color: "#254151",
  },
  input: {
    borderBottomWidth: 1,
    width: 270,
    //height: 30,
    marginTop: 5,
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#254151",
    height: 50,
    width: 180,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 16,
  },

  connexion: {
    color: "white",
    fontSize: 30,
  },
  errorInput: {
    width: 280,
    color: "red",
    marginLeft: 3,
    marginTop: 10,
  },
});

export default EditAboutUser;
