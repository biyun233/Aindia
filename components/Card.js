import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
export default function Card({item}) {
    const salaire = item.salaireMin + '-' + item.salaireMax + '€';
    const expérience = 'Expérience: ' + item.expérience;
    const étude = 'Étude: ' + item.étude;
    const recruteur = item.recruteur + '-' + item.poste;
    return (
        <View style={styles.card}>
            <View style={styles.line}>
                <Text style={styles.cardContent}>{item.title}</Text>
                <Text style={styles.cardContent}>{salaire}</Text>
            </View>
            <View style={styles.infoline}>
                <Text style={styles.info}>{item.nom}</Text>
                <Text style={styles.info}>-{item.location}</Text>
            </View>
            <View style={styles.infoline}>
                <Text style={styles.item}>{expérience}</Text>
                <Text style={styles.item}>{étude}</Text>
            </View>
            <View style={styles.icon}>
                <MaterialIcons name="person-outline" size={24} color="black" />
                <Text style={styles.info}>{recruteur}</Text>
                <Text>{item.date}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flex:1,
        borderWidth:1,
        borderRadius: 6,
        //elevation: 3,
        height: 150,
        width: 350,
        backgroundColor: "white",
        //shadowOffset: {width:1, height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    line: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 8,
        marginVertical: 5
    },
    infoline: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginVertical: 5,  
    },
    icon: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginVertical: 5, 
        marginHorizontal: 5, 
    },
    cardContent: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#254151",
    },
    info: {
        fontSize: 15,
        color: "#254151",
        marginHorizontal: 58,
        marginStart:18
    },
    item: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#254151",
        marginHorizontal: 15,
        marginVertical: 5,
    },

});