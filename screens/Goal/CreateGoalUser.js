import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { Firebase } from "../../utils/Firebase";

import Global from "../../utils/Global";


// Validation des champs du formulaire
const reviewSchema = Yup.object({
  domaine: Yup.string().required("Renseigner un Domaine est Obligatoire"),
  wantedJob: Yup.string().required("Ce Champ est Obligatoire"),
  availability: Yup.string().required("Ce champ est Obligatoire"),
  //workingTime: Yup.string().min(1).max(50),
  description: Yup.string().notRequired("La description n'est pas obligatoire"),
});

// Renvoie l'écran contenant les formulaires
const CreateGoalUser = ({ navigation }) => {
  // Cette fonction permet de naviguer de cet écran à un autre en fonction du paramtètre donné
  // Quand elle sera appelée
  //const pressHandler = () => {
  //navigation.goBack();
  //navigation.push('Accueil');

  function addGoalUser(goal) {
    goal.AuthId = Firebase.auth().currentUser.uid;
    goal.createdAt = Firebase.firestore.FieldValue.serverTimestamp();
    goal.userName = Global.name; 
    Firebase.firestore()
      .collection("goalUsers")
      .add(goal)
      .then((res) => {
        alert("Votre Objectif a bien été créé !");
        navigation.navigate("ProfilScreen");
      })
      .catch((error) => console.log(error));
  }

  console.log(Global.name);

  return (
    <Formik
      initialValues={{
        AuthId: "",
        domaine: "",
        wantedJob: "",
        availability: "",
        workingTime: "",
        description: "",
      }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        addGoalUser(values); // On enregistre les Données dans la Base De Données

        
      }}
    >
      {(props) => (
        <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView>
            <Text style={styles.aindia}>Je Crée Mon Objectif</Text>

            <TextInput
              style={styles.input}
              placeholder="Domaine (ex: Boulangérie, ...)"
              onChangeText={props.handleChange("domaine")}
              value={props.values.domaine}
              onBlur={props.handleBlur("domaine")}
            />
            <Text style={styles.errorInput}>
              {props.touched.domaine && props.errors.domaine}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Poste Recherché"
              onChangeText={props.handleChange("wantedJob")}
              value={props.values.wantedJob}
              onBlur={props.handleBlur("wantedJob")}
            />
            <Text style={styles.errorInput}>
              {props.touched.wantedJob && props.errors.wantedJob}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Disponibilité (ex: à partir du 01/02/2020, ...)"
              onChangeText={props.handleChange("availability")}
              value={props.values.availability}
              onBlur={props.handleBlur("availability")}
            />
            <Text style={styles.errorInput}>
              {props.touched.availability && props.errors.availability}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Durée De Travail Souhaitée (ex: 6 mois, ...)"
              onChangeText={props.handleChange("workingTime")}
              value={props.values.workingTime}
              onBlur={props.handleBlur("workingTime")}
            />
            <Text style={styles.errorInput}>
              {props.touched.workingTime && props.errors.workingTime}
            </Text>

            <TextInput
              style={styles.description}
              multiline
              placeholder="Description (ex: Je recherche un poste de CDI, ...)"
              onChangeText={props.handleChange("description")}
              value={props.values.description}
              onBlur={props.handleBlur("description")}
            />
            <Text style={styles.errorInput}>
              {props.touched.description && props.errors.description}
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
    width: 180,
    marginTop: 20,
    marginLeft: 60,
    marginBottom: 20,
    borderRadius: 16,
  },

  connexion: {
    color: "white",
    fontSize: 30,
  },
  errorInput: {
    width: 272,
    color: "red",
    //marginLeft: 8,
    marginTop: 10,
  },
});

export default CreateGoalUser;
