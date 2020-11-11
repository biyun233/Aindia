import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Firebase } from "../utils/Firebase";
import { prefix } from "../utils/Constant";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//import { addUser } from "../Utils/UserApi";

// Validation des champs du formulaire d'inscription de l'Utilisateur
const reviewSchema = Yup.object({
  firstname: Yup.string().required("Renseigner un Nom est Obligatoire"),
  lastname: Yup.string().required("Renseigner un Prénom est Obligatoire"),
  status: Yup.string().required("Renseigner un Statut est Obligatoire"),
  phone: Yup.string().min(1).max(50),
  homeCity: Yup.string().notRequired("Ce champ n'est pas obligatoire"),
  postalCode: Yup.string().notRequired("Ce champ n'est pas obligatoire"),
  adress: Yup.string().notRequired("Ce champ n'est pas obligatoire"),
  country: Yup.string().notRequired("Ce champ n'est pas obligatoire"),
});

// Renvoie l'écran contenant les formulaires
const CreateProfilUser = ({ navigation }) => {
  // Cette fonction permet de naviguer de cet écran à un autre en fonction du paramtètre donné
  // Quand elle sera appelée
  //const pressHandler = () => {
  //navigation.goBack();
  //navigation.push('Accueil');
  const date = new Date().getDate();
  const month = new Date().getMonth()+1;
  const year = new Date().getFullYear();
  var time = date + '/' + month + '/' + year;
  function addUser(user) {
    user.AuthId = Firebase.auth().currentUser.uid; 
    user.createdAt = time;
    Firebase.firestore()
    .collection('UsersInfos')
    .add(user)
    .then(res => alert("Votre Profil a bien été créé !"))
    .catch((error) => console.log(error));

}

  return (
    <Formik
      initialValues={{
        AuthId: "",
        firstname: "",
        lastname: "",
        status: "",
        phone: "",
        homeCity: "",
        postalCode: "",
        address: "",
        country: "",
      }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        // Création du compte de l'utilisateur
        //const {email, password} = values;
        addUser(values); // On enregistre les Données dans la Base De Données
        navigation.navigate("ProfilUser");
      }}
    >
      {(props) => (
        <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView >
          <Text style={styles.aindia}>Je Crée Mon Profil</Text>

          <TextInput
            style={styles.input}
            placeholder="Nom"
            onChangeText={props.handleChange("firstname")}
            value={props.values.firstname}
            onBlur={props.handleBlur("firstname")}
          />
          <Text style={styles.errorInput}>
            {props.touched.firstname && props.errors.firstname}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Prénom"
            onChangeText={props.handleChange("lastname")}
            value={props.values.lastname}
            onBlur={props.handleBlur("lastname")}
          />
          <Text style={styles.errorInput}>
            {props.touched.lastname && props.errors.lastname}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Statut"
            onChangeText={props.handleChange("status")}
            value={props.values.status}
            onBlur={props.handleBlur("status")}
          />
          <Text style={styles.errorInput}>
            {props.touched.status && props.errors.status}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Telephone"
            onChangeText={props.handleChange("phone")}
            value={props.values.phone}
            onBlur={props.handleBlur("phone")}
          />
          <Text style={styles.errorInput}>
            {props.touched.phone && props.errors.phone}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ville"
            onChangeText={props.handleChange("homeCity")}
            value={props.values.homeCity}
            onBlur={props.handleBlur("homeCity")}
          />
          <Text style={styles.errorInput}>
            {props.touched.homeCity && props.errors.homeCity}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Code Postal"
            onChangeText={props.handleChange("postalCode")}
            value={props.values.postalCode}
            onBlur={props.handleBlur("postalCode")}
          />
          <Text style={styles.errorInput}>
            {props.touched.postalCode && props.errors.postalCode}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Adresse"
            onChangeText={props.handleChange("address")}
            value={props.values.address}
            onBlur={props.handleBlur("address")}
          />
          <Text style={styles.errorInput}>
            {props.touched.address && props.errors.address}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Pays"
            onChangeText={props.handleChange("country")}
            value={props.values.country}
            onBlur={props.handleBlur("country")}
          />
          <Text style={styles.errorInput}>
            {props.touched.country && props.errors.country}
          </Text>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={props.handleSubmit}
          >
            <View style={styles.button}>
              <Text style={styles.connexion}>VALIDER</Text>
            </View>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
        </SafeAreaView>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
  aindia: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    marginTop: 2,
    color: "#254151",
  },
  input: {
    borderBottomWidth: 1,
    width: 300,
    height: 30,
    marginTop: 10,
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

export default CreateProfilUser;