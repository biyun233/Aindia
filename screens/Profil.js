import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';


export default function Profil() { 

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}> Mon Profil</Text>
            </View>
        </View>

        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EBEAEA",
        paddingBottom: 20
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#254151"
    },
});
