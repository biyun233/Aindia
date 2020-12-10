
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


// Validation des champs du formulaire 
const reviewSchema = Yup.object({
  domaine: Yup.string().required("Ce Champ est Obligatoire"),
  responsability: Yup.string().required("Ce Champ est Obligatoire"),
  organization: Yup.string().required("Ce Champ est Obligatoire"),
  duration: Yup.string().required("Ce Champ est Obligatoire"),
  //description: Yup.string().required("La Description n'est Obligatoire"),
  //date: Yup.string().required("La date n'est pas obligatoire"),
});


const CreateExperienceUser = ({ navigation }) => {
  // Cette fonction permet de naviguer de cet écran à un autre en fonction du paramtètre donné
  // Quand elle sera appelée
  //const pressHandler = () => {
  //navigation.goBack();
  //navigation.push('Accueil');

  function addExperienceUser(experience) {
    experience.AuthId = Firebase.auth().currentUser.uid;
    experience.createdAt = Firebase.firestore.FieldValue.serverTimestamp();
    Firebase.firestore()
      .collection("experienceUsers")
      .add(experience)
      .then((res) => {
        alert("Votre Expèrience a bien été créé !");
        this.props.navigation.navigate("ProfilScreen");
      })
      .catch((error) => console.log(error));
  }

  return (
    <Formik
      initialValues={{
        AuthId: "",
        domaine: "",
        responsability: "",
        organization: "",
        duration: "",
        description: "",
        date: "",
      }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        addExperienceUser(values); // On enregistre les Données dans la Base De Données

        navigation.navigate("ProfilScreen");
      }}
    >
      {(props) => (
        <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView>
            <Text style={styles.aindia}></Text>

            <TextInput
              style={styles.input}
              multiline={true}
              placeholder="Domaine * (ex: Boulangérie)"
              onChangeText={props.handleChange("domaine")}
              value={props.values.domaine}
              onBlur={props.handleBlur("domaine")}
            />
            <Text style={styles.errorInput}>
              {props.touched.domaine && props.errors.domaine}
            </Text>

            <TextInput
              style={styles.input}
              multiline={true}
              placeholder="Responsabilité * (ex: Développeur Web)"
              onChangeText={props.handleChange("responsability")}
              value={props.values.responsability}
              onBlur={props.handleBlur("responsability")}
            />
            <Text style={styles.errorInput}>
              {props.touched.responsability && props.errors.responsability}
            </Text>

            <TextInput
              style={styles.input}
              multiline={true}
              placeholder=" Organisation * (ex: Google New York)"
              onChangeText={props.handleChange("organization")}
              value={props.values.organization}
              onBlur={props.handleBlur("organization")}
            />
            <Text style={styles.errorInput}>
              {props.touched.organization && props.errors.organization}
            </Text>

            <TextInput
              style={styles.input}
              multiline={true}
              placeholder="Durée * (ex: 6 mois)"
              onChangeText={props.handleChange("duration")}
              value={props.values.duration}
              onBlur={props.handleBlur("duration")}
            />
            <Text style={styles.errorInput}>
              {props.touched.duration && props.errors.duration}
            </Text>

            <TextInput
              style={styles.description}
              multiline={true}
              placeholder="Description (ex: j'ai developpé une...)"
              onChangeText={props.handleChange("description")}
              value={props.values.description}
              onBlur={props.handleBlur("description")}
            />
            <Text style={styles.errorInput}>
              {props.touched.description && props.errors.description}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Année(s) (ex: 2020, ...)"
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
    fontSize: 30,
    marginTop: 2,
    marginBottom: 5,
    color: "#254151",
  },
  input: {
    borderBottomWidth: 1,
    width: 278,
    height: 40,
    marginTop: 8,
    fontSize: 16,
    padding: 2,
    //borderWidth: 1,
  },
  description: {
    borderBottomWidth: 1,
    width: 278,
    marginTop: 15,
    borderWidth: 1,
    height: 150,
    padding: 2,
    backgroundColor: "white",
    fontSize: 16,
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
    width: 278,
    color: "red",
    marginTop: 3,
  },
});

export default CreateExperienceUser;
