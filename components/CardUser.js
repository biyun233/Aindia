import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-paper";


export default function CardUser(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowColor: "white",
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  cardContent: {
    backgroundColor: "white",
    margin: 10,
    marginLeft: 20,
    //marginHorizontal: 20,
    //marginVertical: 10,
  },
});