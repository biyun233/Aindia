import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Firebase } from "../../utils/Firebase";
import Global from "../../utils/Global";
class EditGoalUser extends Component {

  constructor(props) {
    super();
    this.state = {
      key: props.navigation.state.params.key,
      domaine: props.navigation.state.params.domaine,
      wantedJob: props.navigation.state.params.wantedJob,
      availability: props.navigation.state.params.availability,
      workingTime: props.navigation.state.params.workingTime,
      description: props.navigation.state.params.description,
      userName: Global.name,
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
      .collection("goalUsers")
      .doc(this.state.key);

    UpdateDBRef.set({
      domaine: this.state.domaine,
      wantedJob: this.state.wantedJob,
      availability: this.state.availability,
      workingTime: this.state.workingTime,
      description: this.state.description,
      userName: Global.name,
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
          <Text style={styles.aindia}>J'édite Mon Objectif</Text>

          <TextInput
            style={styles.input}
            placeholder="Domaine"
            value={this.state.domaine}
            onChangeText={(value) => this.inputValueUpdate(value, "domaine")}
          />

          <TextInput
            style={styles.input}
            placeholder="Emploi Recherché"
            value={this.state.wantedJob}
            onChangeText={(value) => this.inputValueUpdate(value, "wantedJob")}
          />

          <TextInput
            style={styles.input}
            placeholder="Disponibilité"
            value={this.state.availability}
            onChangeText={(value) =>
              this.inputValueUpdate(value, "availability")
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Durée De Travail Souhaitée"
            value={this.state.workingTime}
            onChangeText={(value) =>
              this.inputValueUpdate(value, "workingTime")
            }
          />

          <TextInput
            style={styles.description}
            multiline={true}
            placeholder="Description"
            value={this.state.description}
            onChangeText={(value) =>
              this.inputValueUpdate(value, "description")
            }
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
    //justifyContent: "center",
    alignItems: "center",
    //marginTop: Constants.statusBarHeight,
    //borderWidth: 1,
  },
  aindia: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 30,
    marginBottom: 10,
    color: "#254151",
  },
  input: {
    borderBottomWidth: 1,
    width: 278,
    //height: 40,
    marginTop: 20,
    fontSize: 17,
    padding: 2,
  },
  description: {
    borderBottomWidth: 1,
    width: 278,
    marginTop: 15,
    borderWidth: 1,
    height: 220,
    padding: 2,
    backgroundColor: "white",
    fontSize: 17,
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#254151",
    height: 50,
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
    width: 278,
    color: "red",
    //marginLeft: 8,
    marginTop: 5,
  },
});

export default EditGoalUser;
