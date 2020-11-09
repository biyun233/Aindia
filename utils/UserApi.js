
import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,Image,ScrollView,TouchableOpacity,} from "react-native";



import { Firebase } from './Firebase';


export function addUser(user) {
    user.AuthId = Firebase.auth().currentUser.uid; 
    user.createdAt = Firebase.firestore.FieldValue.serverTimestamp();
    Firebase.firestore()
    .collection('UsersInfos')
    .add(user)
    .then(res => alert('OK'))
    .catch((error) => console.log(error));

}