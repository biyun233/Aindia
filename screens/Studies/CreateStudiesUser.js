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


// Validation des champs du formulaire d'inscription de l'Utilisateur
const reviewSchema = Yup.object({
  domaine: Yup.string().required("Renseigner un Nom est Obligatoire"),
  level: Yup.string().required("Renseigner un Prénom est Obligatoire"),
  name: Yup.string().required("Renseigner un Statut est Obligatoire"),
  //school: Yup.string().min(1).max(50),
  //date: Yup.string().notRequired("Ce champ n'est pas obligatoire"),
});

// Renvoie l'écran contenant les formulaires
const CreateStudiesUser = ({ navigation }) => {
  // Cette fonction permet de naviguer de cet écran à un autre en fonction du paramtètre donné
  // Quand elle sera appelée
  //const pressHandler = () => {
  //navigation.goBack();
  //navigation.push('Accueil');

  function addStudiesUser(studies) {
    studies.AuthId = Firebase.auth().currentUser.uid;
    studies.createdAt = Firebase.firestore.FieldValue.serverTimestamp();
    Firebase.firestore()
      .collection("studiesUsers")
      .add(studies)
      .then((res) => alert("Votre Parcours a bien été créé !"))
      .catch((error) => console.log(error));
  }

  return (
    <Formik
      initialValues={{
        AuthId: "",
        domaine: "",
        level: "",
        name: "",
        school: "",
        date: "",
      }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        addStudiesUser(values); // On enregistre les Données dans la Base De Données

        navigation.navigate("ProfilScreen");
      }}
    >
      {(props) => (
        <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView>
            <Text style={styles.aindia}>Je Crée Mon Parcours</Text>

            <TextInput
              style={styles.input}
              placeholder="Domaine (ex: Informaticien, ...)"
              onChangeText={props.handleChange("domaine")}
              value={props.values.domaine}
              onBlur={props.handleBlur("domaine")}
            />
            <Text style={styles.errorInput}>
              {props.touched.domaine && props.errors.domaine}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Niveau (ex: Licence 3, ...)"
              onChangeText={props.handleChange("level")}
              value={props.values.level}
              onBlur={props.handleBlur("level")}
            />
            <Text style={styles.errorInput}>
              {props.touched.level && props.errors.level}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Intitulé (ex: Web Informatique et Connaissances)"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              onBlur={props.handleBlur("name")}
            />
            <Text style={styles.errorInput}>
              {props.touched.name && props.errors.name}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Etablissement (ex: Université Grenoble Alpes)"
              onChangeText={props.handleChange("school")}
              value={props.values.school}
              onBlur={props.handleBlur("school")}
            />
            <Text style={styles.errorInput}>
              {props.touched.school && props.errors.school}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Année(s) (ex: 2020/2021)"
              onChangeText={props.handleChange("date")}
              value={props.values.date}
              onBlur={props.handleBlur("date")}
            />
            <Text style={styles.errorInput}>
              {props.touched.date && props.errors.date}
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
    //marginTop: Constants.statusBarHeight,
  },
  aindia: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    marginTop: 40,
    marginBottom: 30,
    color: "#254151",
  },
  input: {
    borderBottomWidth: 1,
    width: 288,
    //height: 30,
    marginTop: 30,
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
    width: 293,
    color: "red",
    //marginLeft: 8,
    marginTop: 10,
  },
});

export default CreateStudiesUser;
