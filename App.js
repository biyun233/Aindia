import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from "react-native";
import Candidat from './screens/Accueil/Candidat';
import * as Font from 'expo-font';
import RegisterUser from './screens/Auth/RegisterUser';
import Login from './screens/Auth/LoginUser';
import Filtrer from './screens/Filtrer';
import Navigator from './routes/HomeStack';

const App = () => {
  const [loading, setLoading] = useState(true);
  const LoadFont = async () => {
    try {
      await Font.loadAsync({
        "Gilroy": require("./assets/fonts/Gilroy-Bold.ttf"),
        "GT-Sectra-Fine-Regular": require("./assets/fonts/GT-Sectra-Fine-Regular.ttf"),
        "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf")
      });
      setLoading(false);
    } catch (e) {
      console.error('erreur', e);
    }
  }
  
  useEffect(() => {
    LoadFont();
  },[]);

  if(loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <Navigator />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,  //important
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
});
export default App;