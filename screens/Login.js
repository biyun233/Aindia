import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity} from "react-native";
import { Formik } from 'formik';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const Login = props => {
  const [email, setEmail] = useState("");
  const [passeword, setPassword] = useState("");

  const goTo = () => {
    props.navigation.navigate("Candidat");
  };

  return (
      <View style={styles.container}>
        <Text style={styles.aindia}>Aindia</Text>
        <TextInput style={styles.email} placeholder="Email" value={email}  onChangeText={value => setEmail(value)}/>
        <TextInput style={styles.passeword} placeholder="Mot de passe" value={passeword}  onChangeText={value => setPassword(value)}/>
        <TouchableOpacity onPress = {() => console.log("oublier")}>
            <Text style={styles.oublier}>mot de passe oublié?</Text>
        </TouchableOpacity>

        <View>
            <Button 
              title='Se connecter' 
              buttonStyle={styles.button} 
              titleStyle={styles.connexion} 
              onPress={() => props.navigation.navigate("Candidat")}/>
        </View>
        <View>
            <Button 
              icon={
                <Ionicons
                  name="logo-google"
                  size={30}
                  color="white"
                />
              }
              title='Se connecter avec Gmail' 
              buttonStyle={styles.buttonGmail} 
              titleStyle={styles.gmail} 
            />
        </View>
        <View style={styles.body}>
          <Text style={styles.nouveau}>
            Nouveau sur Aindia?   
            <TouchableOpacity onPress={() => props.navigation.navigate("RegisterUser")}>
              <Text style={styles.inscription}>
                 S'inscrire
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
          
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,  //important
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  aindia: {
    color: "#254151",
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 20
  },
  email: {
    borderBottomWidth: 1,
    width: 300,
    height: 30,
    marginTop: 100
  },
  passeword: {
    borderBottomWidth: 1,
    width: 300,
    height: 30,
    marginTop: 20
  },

  oublier: {
    textDecorationLine: "underline",
    marginTop: 10,
    marginStart: 70
  },

  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#254151",
    height: 50,
    width: 250,
    marginTop: 50
  },

  buttonGmail: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#254151",
    height: 50,
    width: 350,
    marginTop: 50
  },

  connexion: {
    color: "white",
    fontSize: 30
  },

  gmail: {
    color: "white",
    fontSize: 25
  },

  body: {
    backgroundColor: "white",
    padding: 20
  },

  nouveau: {
    color: "#254151",
    fontSize: 20
  },

  inscription: {
    color: "#254151",
    fontSize: 20,
    fontWeight: "bold"
  }

});
export default Login;