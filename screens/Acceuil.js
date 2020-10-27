import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";




const Acceuil = props => {
  const [email, setEmail] = useState("");
  const [passeword, setPassword] = useState("");

  const goTo = () => {
    props.navigation.push("Candidat");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.aindia}>Aindia</Text>
        <TextInput style={styles.email} placeholder="Email" value={email}  onChangeText={value => setEmail(value)}/>
        <TextInput style={styles.passeword} placeholder="Mot de passe" value={passeword}  onChangeText={value => setPassword(value)}/>
        <TouchableOpacity onPress = {() => console.log("oublier")}>
            <Text style={styles.oublier}>mot de passe oublié?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {goTo}>
            <View style={styles.button}>
                <Text style={styles.connexion}>Se connecter</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles. button}>
                <Text style={styles.gmail}>Se connecter avec Gmail</Text>
            </View>
        </TouchableOpacity>
        
        <Text style={styles.nouveau}>Nouveau sur Aindia?</Text>
        <Text style={styles.inscription}>S'inscrire</Text>
      </View>
    </ScrollView>
          
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,  //important
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
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
    backgroundColor: "#254151",
    height: 50,
    width: 250,
    marginTop: 50
  },

  connexion: {
    color: "white",
    fontSize: 30
  },

  gmail: {
    color: "white",
    fontSize: 20
  },

  nouveau: {
    color: "#254151",
    fontSize: 20,
    marginTop: 30
  },

  inscription: {
    color: "#254151",
    fontSize: 20,
    fontWeight: "bold"
  }

});
export default Acceuil;