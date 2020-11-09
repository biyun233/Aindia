import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList, TextInput, StatusBar, LogBox } from "react-native";
import FiltreItem from '../components/FiltreItem';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
export default function Filtrer() {
    const [etude, setEtude] = useState([
        {text: 'Peu importe', key:'1', select: 'false', id: 'etude'},
        {text: 'moins de bac +3', key:'2', select: 'false', id: 'etude'},
        {text: 'bac +3 ', key:'3', select: 'false', id: 'etude'},
        {text: 'bac +4', key:'4', select: 'false', id: 'etude'},
        {text: 'bac +5 ou plus', key:'5', select: 'false', id: 'etude'},
    ]);

    const [experience, setExperience] = useState([
        {text: 'Stagiaire', key:'1', select: 'false', id: 'experience'},
        {text: 'moins de 1 an', key:'2', select: 'false', id: 'experience'},
        {text: 'plus de 1 an ', key:'3', select: 'false', id: 'experience'},
        {text: 'de 3 à 5 ans', key:'4', select: 'false', id: 'experience'},
        {text: 'plus de 5 ans', key:'5', select: 'false', id: 'experience'},
    ]);

    const [salaire, setSalaire] = useState([
        {text: 'Peu importe', key:'1', select: 'false', id: 'salaire'},
        {text: 'moins de 1000€', key:'2', select: 'false', id: 'salaire'}, 
        {text: '1000-3000 € ', key:'3', select: 'false', id: 'salaire'},
        {text: '3000-5000 €', key:'4', select: 'false', id: 'salaire'},
        {text: 'plus de 5000€', key:'5', select: 'false', id: 'salaire'},
    ]);

    const [location, setLocation] = useState("");

    const handle = (item, state, setState) => {
        let prev = [...state];
                for (let i = 0; i < prev.length; i++) {
                    if (prev[i] === item ) {
                        console.log("item:  " + prev[i].text + ", select is " + prev[i].select);
                        if(prev[i].select == "false"){
                            prev[i].select = "true";
                        }else if(prev[i].select == "true"){
                            prev[i].select = "false";
                        }
                    } 
                }
                setState(prev);
    }
    const pressHandler = (item) => {
        switch(item.id){
            case 'etude': 
                handle(item, etude, setEtude);
                break;
            case 'experience': 
                handle(item, experience, setExperience);
                break;
            case 'salaire': 
                handle(item, salaire, setSalaire);
                break;
        }
    };


    return (    
        
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView >
                    <StatusBar barStyle="dark-content"/>
                    <View style={styles.content}>
                        <View style={styles.list}>
                            <Text style={styles.title}>Niveau d'études</Text>
                            <FlatList 
                                keyExtractor={(item) => item.key}
                                numColumns= {2}
                                data={etude}
                                renderItem={({item}) => (
                                    <FiltreItem item={item} pressHandler={pressHandler}/>
                                    )}
                                />
                            
                            <Text style={styles.title}>Niveau d'expériences</Text>
                            <FlatList 
                                keyExtractor={(item) => item.key}
                                numColumns= {2}
                                data={experience}
                                renderItem={({item}) => (
                                    <FiltreItem item={item} pressHandler={pressHandler}/>
                                    )}
                                />
                            
                        
                            <Text style={styles.title}>Salaire par mois</Text>
                            <FlatList 
                                keyExtractor={(item) => item.key}
                                numColumns= {2}
                                data={salaire}
                                renderItem={({item}) => (
                                    <FiltreItem item={item} pressHandler={pressHandler}/>
                                    )}
                                />
                            <Text style={styles.title}>Localisation</Text>
                            <TextInput style={styles.input} value={location} onChangeText={value => setLocation(value)}/>
                            <Button 
                                title='Appliquer' 
                                buttonStyle={styles.button} 
                                titleStyle={styles.appliquer} 
                                />
                        </View>
                    </View>              
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EBEAEA",
    },
    content: {
        padding: 20
    },
    title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: "bold",
        color: "#254151",
        marginBottom: 10

    },
    list: {
        marginVertical: 20
    },
    input: {
        borderWidth: 1,
        height: 30
    },
    button: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#254151",
        height: 50,
        width: 250,
        marginTop: 50,
        marginHorizontal: 40
      },
    appliquer: {
        color: "white",
        fontSize: 30
    },
    
});

