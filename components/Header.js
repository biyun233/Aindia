import React, {Component} from "react";
import {SafeAreaView, View, StyleSheet, TextInput, Text, StatusBar, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { prefix } from '../utils/Constant';
import { AntDesign } from '@expo/vector-icons'; 

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }
    handleSearch = (value) =>{
        this.setState({query : value});
        this.props.handle(value);
    }
    render(){
        return (  
            <SafeAreaView style={styles.container}>
                
                <View style={styles.searchbarContainer}>
                <StatusBar
                    backgroundColor="#254151"
                    barStyle="light-content"
                />
                    <TextInput style={styles.input} 
                        placeholder="Chercher" 
                        placeholderTextColor="#254151" 
                        value={this.state.query} 
                        onChangeText={this.handleSearch}/>
                    <Ionicons style={styles.searchIcon} name={`${prefix}-search`}/>
                </View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('TabRoute_recruteur')}>
                    <View style={styles.versionContainer}>
                        <AntDesign style={styles.Icon} name="arrowright"  />
                        <Text style={styles.version}>Recruteur</Text>
                    </View>
                    </TouchableOpacity>
            </SafeAreaView>
        );
    }
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
        width: 140,
        height: 30,
        backgroundColor: "#254151"
    },
    searchIcon: {
        fontSize: 30,
        color: "#254151"
    },
    Icon: {
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





