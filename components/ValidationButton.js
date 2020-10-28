import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import PropTypes from 'prop-types';

const ValidationButton = ({title}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B490B9",
    padding: 16,
    width: "80%",
    borderRadius: 20,
    marginTop: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
    
  },
  text:{
    color: 'white',
    fontSize: 20
  },


});


export default ValidationButton;