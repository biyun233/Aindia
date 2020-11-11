
import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { Firebase } from "../utils/Firebase";



const CreateaboutUser = ({ navigation }) => {
  function addUser(user) {
    user.AuthId = Firebase.auth().currentUser.uid;
    user.createdAt = Firebase.firestore.FieldValue.serverTimestamp();
    Firebase.firestore()
      .collection("aboutUsers")
      .add(user)
      .then((res) => alert("Votre Description a bien été créé !"))
      .catch((error) => console.log(error));
  }

  return (
    <Formik
      initialValues={{
        AuthId: "",
        about: "",
      }}
      //validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        // Création du compte de l'utilisateur
        //const {email, password} = values;
        addUser(values); // On enregistre les Données dans la Base De Données

        navigation.navigate("ProfilUser");
      }}
    >
      {(props) => (
        <View style={styles.container}>
          <Text style={styles.aindia}>À Propos</Text>

          <TextInput
            style={styles.input}
            multiline
            numberOfLines={14}
            placeholder="À Propos de vous..."
            onChangeText={props.handleChange("about")}
            value={props.values.about}
            onBlur={props.handleBlur("about")}
          />
          <Text style={styles.errorInput}>
            {props.touched.about && props.errors.about}
          </Text>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={props.handleSubmit}
          >
            <View style={styles.button}>
              <Text style={styles.connexion}>VALIDER</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

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
    width: 300,
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
    width: "90%",
    color: "red",
    marginLeft: 3,
    marginTop: 5,
  },
});

export default CreateaboutUser;
