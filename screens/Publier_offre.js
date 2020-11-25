import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, StatusBar, Picker, FlatList } from "react-native";
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { Firebase } from "../utils/Firebase";
import ProfilUser from './ProfilUser';
import FiltreItem from '../components/FiltreItem';
export default function Publer_offre({ navigation }) {

    const date = new Date().getDate();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    var time = date + '/' + month + '/' + year;

    const [study, setStudy] = useState('');
    const [exp, setExp] = useState('');
    const [etude, setEtude] = useState([
        {text: 'Peu importe', key:'1', select: 'false', id: 'etude'},
        {text: '- de bac +3', key:'2', select: 'false', id: 'etude'},
        {text: 'bac +3 ', key:'3', select: 'false', id: 'etude'},
        {text: 'bac +4', key:'4', select: 'false', id: 'etude'},
        {text: 'bac +5 ou +', key:'5', select: 'false', id: 'etude'},
    ]);
    const [experience, setExperience] = useState([
        {text: 'Stagiaire', key:'1', select: 'false', id: 'experience'},
        {text: 'moins de 1 an', key:'2', select: 'false', id: 'experience'},
        {text: 'plus de 1 an ', key:'3', select: 'false', id: 'experience'},
        {text: 'de 3 à 5 ans', key:'4', select: 'false', id: 'experience'},
        {text: 'plus de 5 ans', key:'5', select: 'false', id: 'experience'},
    ]);

    function addOffre(offre) {
        offre.key = Math.random().toString();
        offre.AuthId = Firebase.auth().currentUser.uid; 
        offre.recruteur = Firebase.auth().currentUser.firstname + ' ' + Firebase.auth().currentUser.lastname; 
        Firebase.firestore()
        .collection('OfferDetails')
        .add(offre)
        .then(res => alert("L'Offre a été bien crée!"))
        .catch((error) => console.log(error));
    }

    function reset(state, setState){
        let prev = [...state];
        for (let i = 0; i < prev.length; i++) {
            prev[i].select = "false";
        }
        setState(prev);
    }
    function handle(item, state, setState){
        let prev = [...state];
        for (let i = 0; i < prev.length; i++) {
            if (prev[i] === item ) {
                if(prev[i].select == "true"){
                    prev[i].select = "false";
                }
                else if(prev[i].select == "false"){
                    prev[i].select = "true";
                    for (let j = 0; j < prev.length; j++) {
                        if (prev[j] !== item ) {
                            prev[j].select = "false";
                        }
                    }
                }
                
            } 
        }
        setState(prev);
    }
    function pressHandler(item) {
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
        <Formik
            initialValues={{ title:'',
            nom:'', location:'', 
            salaireMin:'', salaireMax:'',
            expérience:'', étude:'',
            date: time, recruteur:'',
            poste:'manager', mission:'',
            tech:''}}
            onSubmit={(values, actions) => {
                for (let i = 0; i < etude.length; i++) {
                    if(etude[i].select == "true"){
                        setStudy(etude[i].text);
                    }
                    if(experience[i].select == "true"){
                        setExp(experience[i].text);
                    }
                }
                values.expérience = exp;
                values.étude = study;
                addOffre(values);
                actions.resetForm();
                reset(etude, setEtude);
                reset(experience, setExperience);
                navigation.navigate("Recruteur");
            }}
        >
        {(props) => (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView >
                <StatusBar barStyle="light-content"/>
                <View style={styles.content}> 
                        <TextInput 
                            style={styles.input} 
                            placeholder="Titre d'offre" 
                            value={props.values.title}  
                            onChangeText={props.handleChange('title')}/>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Nom d'entreprise" 
                            value={props.values.nom}  
                            onChangeText={props.handleChange('nom')}/>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Salaire Minimum" 
                            value={props.values.salaireMin}  
                            onChangeText={props.handleChange('salaireMin')}/>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Salaire Maximum" 
                            value={props.values.salaireMax}  
                            onChangeText={props.handleChange('salaireMax')}/>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Localisation" 
                            value={props.values.location}  
                            onChangeText={props.handleChange('location')}/>
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
                                value={props.values.mission} 
                                onChangeText={props.handleChange('mission')}/>
                        <Text style={styles.title}>Technologie Requis</Text>
                        <TextInput 
                            multiline={true} 
                            style={styles.input_grand} 
                            value={props.values.tech} 
                            onChangeText={props.handleChange('tech')}/>
                        <Button 
                            title='Appliquer' 
                            buttonStyle={styles.button} 
                            titleStyle={styles.appliquer} 
                            onPress={props.handleSubmit}
                            />
                    
                </View>              
            </KeyboardAwareScrollView>
            </SafeAreaView>
            )}
        </Formik> 
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

