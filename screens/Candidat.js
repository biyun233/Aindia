import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants';

const Candidat = props => {
    return (
        <View style={styles.container}>

        </View>

        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EBEAEA",
        paddingBottom: 20,
        marginTop: Constants.statusBarHeight
    }
});

export default Candidat;