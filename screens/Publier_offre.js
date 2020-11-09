import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList, TextInput, StatusBar, LogBox } from "react-native";
import FiltreItem from '../components/FiltreItem';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
export default function Publer_offre() {
    const [titre, setTitre] = useState("");
    const [nom, setNom] = useState("");
    const [salaire_min, setSalaire_min] = useState("");
    const [salaire_max, setSalaire_max] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [mission, setMission] = useState("");
    const [tech, setTech] = useState("");
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
        }
    };


    return (    
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={{ title:'',
                nom:'', location:'', 
                salaireMin:'', salaireMax:'',
                expérience:'', niveau:'',
                date:'', recruteur:'',
                poste:'Manager', mission:'',
                tech:''}}
                onSubmit={(values) => {

                }}
            >
            <KeyboardAwareScrollView >
                    <StatusBar barStyle="light-content"/>
                    <View style={styles.content}>
                        <View>
                            <TextInput style={styles.input} placeholder="Titre d'offre" value={titre}  onChangeText={value => setTitre(value)}/>
                            <TextInput style={styles.input} placeholder="Nom d'entreprise" value={nom}  onChangeText={value => setNom(value)}/>
                            <TextInput style={styles.input} placeholder="Salaire Minimum" value={salaire_min}  onChangeText={value => setSalaire_min(value)}/>
                            <TextInput style={styles.input} placeholder="Salaire Maximum" value={salaire_max}  onChangeText={value => setSalaire_max(value)}/>
                            <TextInput style={styles.input} placeholder="Localisation" value={localisation}  onChangeText={value => setLocalisation(value)}/>
                        </View>
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
                            <Text style={styles.title}>Mission</Text>
                            <TextInput 
                                multiline={true} 
                                style={styles.input_grand} 
                                value={mission} 
                                onChangeText={value => setMission(value)}/>
                            <Text style={styles.title}>Technologie Requis</Text>
                            <TextInput multiline={true} style={styles.input_grand} value={tech} onChangeText={value => setTech(value)}/>
                            <Button 
                                title='Appliquer' 
                                buttonStyle={styles.button} 
                                titleStyle={styles.appliquer} 
                                />
                        </View>
                    </View>              
            </KeyboardAwareScrollView>
            
            </Formik>
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
        borderBottomWidth: 1,
        width: 300,
        height: 30,
        marginTop: 20,
        marginBottom: 10
      },
    input_grand: {
        borderWidth: 1,
        height: 150,
        width: 300,
        backgroundColor: "white"
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

