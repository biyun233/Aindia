import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'; 

const Header_filtrer = (props) => {
    return (
        <View style={styles.header}>
            {/*<AntDesign style={styles.icon} name="left" size={24} color="#254151" />*/}
            <Text style={styles.title}>Filtrer</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        height: 50,
        paddingTop: Constants.statusBarHeight + 5,
    },
    title: {
        textAlign: "center",
        color: "#254151",
        fontSize: 20,
        fontWeight: "bold",
    },
    icon: {
        marginLeft: 1
    }
})
export default Header_filtrer;