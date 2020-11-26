import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function Card({item}) {
    const poste = 'Poste: ' + item.wantedJob;
    const expérience = 'Expérience: ' + item.workingTime;
    //const étude = 'Étude: ' + item.étude;
    const disponibilité = 'Disponible: ' + item.availability;
    return (
        <View style={styles.card}>
            <View style={styles.line}>
                <Text style={styles.cardContent}>{item.userName}</Text>
            </View>
            <View style={styles.line_2}>
                <Text style={styles.cardContent}>{item.domaine}</Text>
            </View>
            <View style={styles.infoline}>
                <Text style={styles.item}>{poste}</Text> 
            </View>
            <View style={styles.infoline}>
                <Text style={styles.item}>{expérience}</Text>
            </View>
            <View style={styles.infoline}>
                <Text style={styles.item}>{disponibilité}</Text>
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
        height: 160,
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
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginHorizontal: 18,
    },
    line_2: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        marginHorizontal: 8,
    },
    infoline: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    icon: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center", 
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
        marginHorizontal: 30,
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