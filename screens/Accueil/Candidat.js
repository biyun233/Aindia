import React, { Component, useState, useEffect } from 'react';
import { View, StatusBar, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from "react-native";
import { Button } from 'react-native-elements';
import Card from '../../components/Card';
import { Firebase } from "../../utils/Firebase";
import _ from 'lodash';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-community/async-storage';
import Global from '../../utils/Global';
class Candidat extends Component { 
    constructor(props) {
        super(props);
        this.OfferDetails = Firebase.firestore().collection("OfferDetails").orderBy('date', "desc");
        this.user = Firebase.firestore().collection("UsersInfos").where("AuthId", "==", Firebase.auth().currentUser.uid); 
        this.state = {
            isLoading: true,
            offerList: [],
            dataSearch: [],
            userList: [],
            query: '',
            étude: '',
            expérience: '',
            location: '',
        };
      }
    getData = async() => {
        try {
             const value = await AsyncStorage.getItem('location');
             const etude = await AsyncStorage.getItem('etude');
             const experience = await AsyncStorage.getItem('experience');
            this.setState({location: value});
            this.setState({étude: etude});
            this.setState({expérience: experience});
            
             await AsyncStorage.clear();
             console.log("études est : " + this.state.étude);
             console.log("experience est : " + this.state.expérience);
             console.log("location est : " + this.state.location);
             if(this.state.étude != null){
                this.handleEtudes();
                if(this.state.expérience != null){
                    this.handleExperience();
                }
                else if(this.state.location != null){
                    this.handleLocation();
                }
            }
        }catch (err) {
 
        }
    }
    componentDidMount() {
        this.unsubscribe = this.OfferDetails.onSnapshot(this.getCollection); 
        this.unsubscribe_1 = this.user.onSnapshot(this.getCollection_1); 
    }
    componentWillUnmount() {
        this.unsubscribe_1();
        this.unsubscribe();
    }
    getCollection = (querySnapshot) => {
        const offerList = [];
        querySnapshot.forEach((res) => {
            offerList.push(res.data());
        });
    
        this.setState({ offerList, dataSearch: offerList, isLoading: false });
    }
    getCollection_1 = (querySnapshot) => {
        const userInfo = [];
        querySnapshot.forEach((res) => {
            userInfo.push(res.data());
        });
    
        this.setState({ user:userInfo });
        Global.name = userInfo[0].firstname + ' ' + userInfo[0].lastname;
        Global.user = userInfo;
        console.log(Global.user);
    }
   
   _renderItem = ({item, index}) => {
       return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('OffreDetails', item)}>
            <Card item={item} />
        </TouchableOpacity>
       );
   }
   _refresh=()=>{
        this.getData();
        this.handleSearch();
   }
   
    handle = (value) =>{
        this.setState({query: value});
        this.handleSearch();
    }
    handleEtudes = () => {
        var data = this.state.dataSearch;
        var étude = this.state.étude;
        const niveau_étude = étude.toLowerCase();
        console.log("niveau étude: " + niveau_étude);
        console.log("Filtrer études!");
        if(étude !== 'Peu importe'){
            data = data.filter(item => 
                item.étude.toLowerCase().includes(niveau_étude)
                );
        }
        this.setState({dataSearch: data});
    }
    handleExperience = () => {
        var data = this.state.dataSearch;
        console.log("Filtrer expérience!");
        var expérience = this.state.expérience;
        const niveau_expérience = expérience.toLowerCase();
        console.log("niveau expérience: " + niveau_expérience);
            data = data.filter(item => 
                item.expérience.toLowerCase().match(niveau_expérience)
            );
    
        this.setState({dataSearch: data});
    }
    handleLocation = () => {
        var data = this.state.dataSearch;
        console.log("location: " + this.state.location);
        console.log("Filtrer Location!");
        var location = this.state.location;
        const niveau_location = location.toLowerCase();
        console.log("niveau location: " + niveau_location);
        data = data.filter(item => 
                item.location.toLowerCase().match(niveau_location)
        );
        this.setState({dataSearch: data});
    }

    handleSearch = () =>{
        var data = this.state.offerList;
        var query = this.state.query;
        const formattedQuerry = query.toLowerCase();
        if(this.state.query == ''){
            this.setState({dataSearch: data});
        }
        else{
            data = data.filter(item => 
                item.title.toLowerCase().includes(formattedQuerry)
                );
        }
        this.setState({dataSearch: data});
        
    }
    render(){
        return (
            <SafeAreaView style={styles.container}>
                
                <Header  style={{backgroundColor:'#254151'}} navigation={this.props.navigation} handle={this.handle}/>
                <ScrollView>
                <View style={styles.row}>
                    <Button 
                    title='Effacer' 
                    buttonStyle={styles.button} 
                    titleStyle={styles.filtrer} 
                    onPress={() => {this.setState({dataSearch: this.state.offerList})}}
                    />
                    <Button 
                    title='Filtrer' 
                    buttonStyle={styles.button} 
                    titleStyle={styles.filtrer} 
                    onPress={() => {this.props.navigation.navigate('Filtrer',{
                        refresh:()=>{
                         this._refresh();
                        },
                    })}}
                    />
                    
                </View>
                <View>
                    <FlatList 
                            data={this.state.dataSearch}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={this._renderItem}
                            />
                </View> 
                </ScrollView>  
            </SafeAreaView> 
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#EBEAEA",
        paddingBottom: 20
    },
    row: {
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },

    button: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 0,
        borderColor: "#254151",
        backgroundColor: "white",
        height: 38,
        width: 90,
        marginTop: 20,
        
      },
    filtrer:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#254151",
        alignItems: "center",
    },
});

export default Candidat;