import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Firebase } from "../../utils/Firebase";


class EditStudiesUser extends Component {
  // Cette fonction permet de naviguer de cet écran à un autre en fonction du paramtètre donné
  // Quand elle sera appelée
  //const pressHandler = () => {
  //navigation.goBack();
  //navigation.push('Accueil');

  constructor(props) {
    super();
    this.state = {
      key: props.navigation.state.params.key,
      domaine: props.navigation.state.params.domaine,
      level: props.navigation.state.params.level,
      name: props.navigation.state.params.name,
      school: props.navigation.state.params.school,
      date: props.navigation.state.params.date,
      AuthId: props.navigation.state.params.AuthId,
      isLoading: true,
    };
  }

  inputValueUpdate = (value, prop) => {
    const state = this.state;
    state[prop] = value;
    this.setState(state);
  };

  updateUser() {
    this.setState({ isLoading: true });

    const UpdateDBRef = Firebase.firestore()
      .collection("studiesUsers")
      .doc(this.state.key);

    UpdateDBRef.set({
      domaine: this.state.domaine,
      level: this.state.level,
      name: this.state.name,
      school: this.state.school,
      date: this.state.date,
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
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <Text style={styles.aindia}>J'édite Mon Parcours</Text>

          <TextInput
              multiline={true}
              style={styles.input}
              placeholder="Domaine"
              value={this.state.domaine}
              onChangeText={(value) => this.inputValueUpdate(value, "domaine")}
          />

          <TextInput
              multiline={true}
              style={styles.input}
              placeholder="Niveau"
              value={this.state.level}
              onChangeText={(value) => this.inputValueUpdate(value, "level")}
          />

          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="name"
            value={this.state.name}
            onChangeText={(value) => this.inputValueUpdate(value, "name")}
          />

          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Établissement"
            value={this.state.school}
            onChangeText={(value) => this.inputValueUpdate(value, "school")}
          />

          <TextInput
            style={styles.input}
            placeholder="Année(s)"
            value={this.state.date}
            onChangeText={(value) => this.inputValueUpdate(value, "date")}
          />

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.updateUser()}
          >
            <View style={styles.button}>
              <Text style={styles.connexion}>VALIDER</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

// Définition des Styles appliqués sur l'interface RegisterUser
const styles = StyleSheet.create({
  container: {
    flex: 1, //important
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //marginTop: Constants.statusBarHeight,
  },
  aindia: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    color: "#254151",
  },
  input: {
    borderBottomWidth: 1,
    width: 278,
    height: 55,
    marginTop: 8,
    fontSize: 16,
    padding: 3,
  },

  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#254151",
    height: 60,
    //width: 180,
    marginTop: 20,
    marginLeft: 65,
    marginRight: 65,
    marginBottom: 20,
    borderRadius: 16,
  },

  connexion: {
    color: "white",
    fontSize: 30,
  },
  errorInput: {
    width: 293,
    color: "red",
    //marginLeft: 8,
    marginTop: 10,
  },
});

export default EditStudiesUser;
