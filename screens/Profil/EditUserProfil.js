import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Firebase } from "../../utils/Firebase";



class EditUserProfil extends Component {
  // Cette fonction permet de naviguer de cet écran à un autre en fonction du paramtètre donné
  // Quand elle sera appelée
  //const pressHandler = () => {
  //navigation.goBack();
  //navigation.push('Accueil');

  constructor(props) {
    super();
    this.state = {
      key: props.navigation.state.params.key,
      firstname: props.navigation.state.params.firstname,
      lastname: props.navigation.state.params.lastname,
      status: props.navigation.state.params.status,
      phone: props.navigation.state.params.phone,
      homeCity: props.navigation.state.params.homeCity,
      postalCode: props.navigation.state.params.postalCode,
      address: props.navigation.state.params.address,
      country: props.navigation.state.params.country,
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
      .collection("UsersInfos")
      .doc(this.state.key);

    UpdateDBRef.set({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      status: this.state.status,
      phone: this.state.phone,
      homeCity: this.state.homeCity,
      postalCode: this.state.postalCode,
      address: this.state.address,
      country: this.state.country,
      AuthId: this.state.AuthId,
    })
      .then((docRef) => {
        alert("Vos Modifications ont bien été prises en compte !")
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
          <Text style={styles.aindia}>Aindia</Text>

          <TextInput
            style={styles.input}
            placeholder="Nom"
            value={this.state.firstname}
            onChangeText={(value) => this.inputValueUpdate(value, "firstname")}

            //onBlur={props.handleBlur("firstname")}
          />

          <TextInput
            style={styles.input}
            placeholder="Prénom"
            value={this.state.lastname}
            onChangeText={(value) => this.inputValueUpdate(value, "lastname")}

            //onBlur={props.handleBlur("lastname")}
          />

          <TextInput
            style={styles.input}
            placeholder="Statut"
            value={this.state.status}
            onChangeText={(value) => this.inputValueUpdate(value, "status")}

            //onBlur={props.handleBlur("status")}
          />

          <TextInput
            style={styles.input}
            placeholder="Telephone"
            value={this.state.phone}
            onChangeText={(value) => this.inputValueUpdate(value, "phone")}

            //onBlur={props.handleBlur("phone")}
          />

          <TextInput
            style={styles.input}
            placeholder="Ville"
            value={this.state.homeCity}
            onChangeText={(value) => this.inputValueUpdate(value, "homeCity")}

            //onBlur={props.handleBlur("homeCity")}
          />

          <TextInput
            style={styles.input}
            placeholder="Code Postal"
            value={this.state.postalCode}
            onChangeText={(value) => this.inputValueUpdate(value, "postalCode")}

            //onBlur={props.handleBlur("postalCode")}
          />

          <TextInput
            style={styles.input}
            placeholder="Adresse"
            value={this.state.address}
            onChangeText={(value) => this.inputValueUpdate(value, "address")}

            //onBlur={props.handleBlur("address")}
          />

          <TextInput
            style={styles.input}
            placeholder="Pays"
            value={this.state.country}
            onChangeText={(value) => this.inputValueUpdate(value, "country")}

            //onBlur={props.handleBlur("country")}
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
    marginTop: 15,
    marginBottom: 5,
    color: "#254151",
  },
  input: {
    borderBottomWidth: 1,
    width: 278,
    //height: 40,
    marginTop: 20,
    fontSize: 17,
  },
  description: {
    borderBottomWidth: 1,
    width: 278,
    marginTop: 15,
    borderWidth: 1,
    height: 150,
    padding: 4,
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
    width: "90%",
    color: "red",
    marginLeft: 3,
    marginTop: 5,
  },
});

export default EditUserProfil;
