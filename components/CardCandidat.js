import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Card({item}) {
    return (
        <SafeAreaView style={styles.card}>
            <View style={styles.line}>
                <Text style={styles.cardContent}>{item.userName}</Text>
            </View>

            <Text style={styles.itemStyle}>Domaine ->
                <Text style={[styles.itemStyle, {fontWeight: 'normal'}]}> {item.domaine}</Text>
            </Text>

            <Text style={styles.itemStyle}>Poste Recherché ->
                <Text style={[styles.itemStyle, {fontWeight: 'normal'}]}> {item.wantedJob}</Text>
            </Text>

            <Text style={styles.itemStyle}>Durée ->
                <Text style={[styles.itemStyle, {fontWeight: 'normal'}]}> {item.workingTime}</Text>
            </Text>

            <Text style={styles.itemStyle}>Disponibilité ->
                <Text style={[styles.itemStyle, {fontWeight: 'normal'}]}> {item.availability}</Text>
            </Text>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    card: {
        flex:1,
        borderWidth:1,
        borderRadius: 6,
        //elevation: 3,
        height: "100%",
        width: "98%",
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
        marginHorizontal: 10,
        marginTop: 3,
        marginBottom: 4,
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
    cardContent: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#254151",
    },
    item: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#254151",
        marginHorizontal: 15,
        marginVertical: 2,
    },


    itemStyle: {
        marginLeft: 10,
        margin: 2,
        fontSize: 18,
        fontWeight: 'bold',
        //width: "80%",
    },
    itemTitle: {
        marginLeft: 10,
        margin: 2,
        fontSize: 17,
        fontWeight: "bold",
    },

    row: {
        flexDirection: "row",
        //justifyContent: "space-between",
        width: '88%'
    },
    itemS: {
        //marginLeft: 20,
        flexDirection: "column",
        //marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: "underline",
        //width: '44%',
    },


    itemJob: {
        //marginLeft: 20,
        flexDirection: "column",
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: "underline",
        //width: '48%',
    },
    itemStyleJob: {
        margin: 10,
        marginLeft: 13,
        fontSize: 16,
        //marginLeft: '29%',
        width: "62%"
    },

    itemDate: {
        //marginLeft: 20,
        flexDirection: "column",
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: "underline",
        //width: '48%',
    },
    itemStyleDtae: {
        margin: 10,
        marginLeft: 44,
        fontSize: 16,
        //width: "62%"
    }

});
