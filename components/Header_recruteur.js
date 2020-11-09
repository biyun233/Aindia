import React, {useState} from "react";
import {SafeAreaView, View, StyleSheet, TextInput, Text, StatusBar, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { prefix } from '../utils/Constant';


export default function Header_recruteur({ navigation }) {
    const [search, setSearch] = useState("");
    const pressHandler = () => {
        navigation.navigate('TabRoute_candidat');
    }
    return (  
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.searchbarContainer}>
                <TextInput style={styles.input} placeholder="Chercher" placeholderTextColor="#254151" value={search} onChangeText={value => setSearch(value)}/>
                <Ionicons style={styles.searchIcon} name={`${prefix}-search`}/>
            </View>
            <TouchableOpacity onPress = {pressHandler}>
                <View style={styles.versionContainer}>
                    <Text style={styles.version}>Recruteur</Text>
                    <Ionicons style={styles.downIcon} name={`${prefix}-arrow-down`}/>
                </View>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#254151"
    },
    searchbarContainer: {
        borderWidth:1,
        borderColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 5,
        marginVertical: 10,
        width: 200,
        height: 30,
        backgroundColor: "white"
    },
    versionContainer: {
        borderWidth:1,
        borderColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 5,
        marginVertical: 10,
        width: 130,
        height: 30,
        backgroundColor: "#254151"
    },
    searchIcon: {
        fontSize: 30,
        color: "#254151"
    },
    downIcon: {
        fontSize: 30,
        color: "white"
    },
    input:{
        fontWeight: "bold",
        fontSize: 20
    },

    version: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#F8F2F2"
    }
});

