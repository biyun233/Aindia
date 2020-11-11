import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, StatusBar, Picker } from "react-native";
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { Firebase } from "../utils/Firebase";
import ProfilUser from './ProfilUser';
export default function Publer_offre({ navigation }) {

    const date = new Date().getDate();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    var time = date + '/' + month + '/' + year;
        
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
                addOffre(values);
                actions.resetForm();
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
                        <Picker
                            // passing value directly from formik
                            selectedValue={props.values.étude}
                            // changing value in formik
                            onValueChange={itemValue => props.setFieldValue('étude', itemValue)}
                        >
                            <Picker.Item label="Niveau d'étude" value={props.values.étude} key={0} />
                            <Picker.Item label='Peu importe' value="Peu importe" key={1} />
                            <Picker.Item label='- de bac +3' value="- de bac +3" key={2} />
                            <Picker.Item label='bac +3' value="bac +3" key={3} />
                            <Picker.Item label='bac +4' value="bac +4" key={4} />
                            <Picker.Item label='bac +5 ou +' value="bac +5 ou +" key={5} />
                        </Picker>
                        
                        <Text style={styles.title}>Niveau d'expériences</Text>
                        <Picker
                            // passing value directly from formik
                            selectedValue={props.values.expérience}
                            // changing value in formik
                            onValueChange={itemValue => props.setFieldValue('expérience', itemValue)}
                        >
                            <Picker.Item label="Niveau d'expérience" value={props.values.expérience} key={0} />
                            <Picker.Item label='Stagiaire' value="Stagiaire" key={1} />
                            <Picker.Item label='moins de 1 an' value="moins de 1 an" key={2} />
                            <Picker.Item label='de 3 à 5 ans' value="de 3 à 5 ans" key={3} />
                            <Picker.Item label='plus de 5 ans' value="plus de 5 ans" key={4} />
                            <Picker.Item label='plus de 1 an' value="plus de 1 an" key={5} />
                        </Picker>
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

