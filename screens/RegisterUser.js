import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Firebase } from '../utils/Firebase';
import {prefix} from '../utils/constant';
import ValidationButton from '../components/ValidationButton';

// Validation des champs du formulaire d'inscription de l'Utilisateur 
const reviewSchema = Yup.object({
    email: Yup.string().email('Cette Adresse Email est Invalide !').required("L'adresse mail est Obligatoire !"),
    password: Yup.string().required('Le Mot de Passe est Obligatoire !')
    .min(5, 'Le nombre de caractères doit être égal ou supérieur à 5 !')
    .max(10, 'Le nombre de caractère ne doit pas dépasser 10 !'),
    confirmPassword: Yup.string().required('La Confirmation du Mot de Passe est Obligatoire ! ')
    .test('Les mots de passes entrer correspondent', 'Les mots de passes doivent correspondre !', function(value) {
        return this.parent.password === value;
    })
});

// Renvoie l'écran contenant les formulaires
const RegisterUser = () => {

    return (
        <Formik 
            initialValues = {{ email: '', password: '', confirmPassword: '' }}
            validationSchema={reviewSchema}
            onSubmit= {(values, actions) => {
                
                //const {email, password} = values;
                Firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
                actions.resetForm();
            }} 
        >
            {(props) => (
                <View style={styles.container}>
                    <Text style={styles.title}>AINDIA</Text>

                    <TextInput 
                        style={styles.input} 
                        placeholder="Adresse Email" 
                        keyboardType={'email-address'}
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                        onBlur={props.handleBlur('email')}
                    />
                    <Text style={styles.errorInput}>{ props.touched.email && props.errors.email }</Text>

                    <TextInput 
                        style={styles.input} 
                        placeholder="Mot de Passe"
                        secureTextEntry
                        onChangeText={props.handleChange('password')}
                        value={props.values.password}
                        onBlur={props.handleBlur('password')}
                    />
                    <Text style={styles.errorInput}>{ props.touched.password && props.errors.password }</Text>

                    <TextInput 
                        style={styles.input} 
                        placeholder="Confirmation du Mot de Passe"
                        secureTextEntry
                        onChangeText={props.handleChange('confirmPassword')}
                        value={props.values.confirmPassword}
                        onBlur={props.handleBlur('confirmPassword')}
                    />
                    <Text style={styles.errorInput}>{ props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                    
                    <TouchableOpacity style={styles.buttonStyle} onPress={props.handleSubmit}>
                        <Text style={styles.text}>Créer Mon Compte</Text>
                    </TouchableOpacity>
                </View>
            )}

        </Formik>
    );
}

// Définition des Styles appliqués sur l'interface RegisterScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#254151', 
    marginTop: Constants.statusBarHeight, 
  },
  title: {
      marginTop: 50,
      marginBottom: 70,
      color: "white",
      fontSize: 50,
      color: "#B490B9",
  },
  input: {
      backgroundColor: "white",
      padding: 16,
      width: "90%",
      borderRadius: 5,
      marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  errorInput: {
      width: "90%",
      color: 'red',
      marginLeft: 3,
      marginTop: 1,
      marginBottom: 8,
  },
  buttonStyle: {
    backgroundColor: "#B490B9",
    padding: 16,
    width: "80%",
    borderRadius: 20,
    marginTop: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  
});

export default RegisterUser;