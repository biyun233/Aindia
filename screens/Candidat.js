import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";

import Header from '../components/Header';


const Candidat = props => {
    return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#254151" /> 
      <Header />
    </View>
       
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Candidat;