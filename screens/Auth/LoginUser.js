import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Firebase } from "../../utils/Firebase";
import { auth } from "../../utils/GoogleAuth";



// Validation des champs du formulaire d'inscription de l'Utilisateur
const reviewSchema = Yup.object({
  email: Yup.string()
    .email("L'Adresse Email renseignée est Invalide !")
    .required("L'adresse mail est Obligatoire !"),
  password: Yup.string()
    .required("Le Mot de Passe est Obligatoire !")
    .min(5, "Le nombre de caractères est égal à 5 au minimum !")
    .max(10, "Votre Mot de Passe contient au plus 10 caractères !"),
});

const LoginUser = ({ navigation}) => {
  const pressHandler = () => {
    navigation.navigate("RegisterUser");
  };

  //const handleLoginGoogle = () => { auth() }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        console.log(values.email, values.password);

        Firebase.auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(() => navigation.navigate("TabRoute_candidat"))
          .catch((error) =>
            alert("Le Mot de Passe ou l'email saisi est invalide !")
          );
      }}
    >
      {(props) => (
        <SafeAreaView>
          <KeyboardAwareScrollView>
            <View style={styles.container}>
              <Text style={styles.aindia}>Aindia</Text>

              <TextInput
                style={styles.email}
                placeholder="Email"
                keyboardType={"email-address"}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
              />
              <Text style={styles.errorInput}>
                {props.touched.email && props.errors.email}
              </Text>

              <TextInput
                style={styles.passeword}
                placeholder="Mot de Passe"
                secureTextEntry
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
              />
              <Text style={styles.errorInput}>
                {props.touched.password && props.errors.password}
              </Text>

              <TouchableOpacity onPress={() => console.log("oublier")}>
                <Text style={styles.oublier}>mot de passe oublié?</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={props.handleSubmit}>
                <View style={styles.button}>
                  <Text style={styles.connexion}>Se connecter</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  auth();
                }}
              >
                <View style={styles.button}>
                  <Text style={styles.gmail}>Se connecter avec Gmail</Text>
                </View>
              </TouchableOpacity>

              <Text style={styles.nouveau}>Nouveau sur Aindia?</Text>
              <Text style={styles.inscription} onPress={pressHandler}>
                S'inscrire
              </Text>
            </View>
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
    marginTop: Constants.statusBarHeight,
  },
  aindia: {
    color: "#254151",
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 20,
  },
  email: {
    borderBottomWidth: 1,
    width: 300,
    //height: 30,
    marginTop: 100,
  },
  passeword: {
    borderBottomWidth: 1,
    width: 300,
    //height: 30,
    marginTop: 20,
  },

  oublier: {
    textDecorationLine: "underline",
    marginTop: 20,
    marginStart: 98,
    fontSize: 20,
  },

  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#254151",
    height: 50,
    width: 250,
    marginTop: 50,
    borderRadius: 16,
  },

  connexion: {
    color: "white",
    fontSize: 30,
  },

  gmail: {
    color: "white",
    fontSize: 20,
  },

  nouveau: {
    color: "#254151",
    fontSize: 20,
    marginTop: 30,
  },

  inscription: {
    color: "#254151",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  errorInput: {
    width: 300,
    color: "red",
    marginLeft: 3,
    marginTop: 10,
  },
});
export default LoginUser;
