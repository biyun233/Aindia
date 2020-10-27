import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableHighlight, TouchableOpacity, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Acceuil from './screens/Acceuil';
import Candidat from './screens/Candidat';
import * as Font from 'expo-font';

const { Navigator, Screen } = createStackNavigator();


const App = () => {
  const [loading, setLoading] = useState(true);
  const loadFirst = async () => {
    try {
      /*
      await Font.loadAsync({
        'Gilroy': Gilroy,
        "GT-Sectre-Fine-Regular": require("./assets/fonts/GT-Sectre-Fine-Regular.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
        "Montserrat-SemiBold": require("./assets/fonts/Montserrat-Semibold.ttf")
        
      });
      */
      setLoading(false);
    } catch (e) {
      console.error("erreur", e);
    }
  }
  useEffect(() => {
      loadFirst();
  }, [])

  if(loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Navigator 
          screenOptions = {options => {
            return { 
              headerLeft: null,
              title: null
            };
          }}>
        <Screen name="Acceuil" component={Acceuil} />
        <Screen 
          name="Candidat" 
          component={Candidat} 
          />
      </Navigator>
    </NavigationContainer>
   
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
  }
});
export default App;