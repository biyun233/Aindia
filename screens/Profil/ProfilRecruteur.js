
import React, { Component } from "react";
import Constants from "expo-constants";
import {
    View, StatusBar, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, SafeAreaView,Alert
} from "react-native";
import CardMesOffres from '../../components/CardMesOffres';
import { Firebase } from "../../utils/Firebase";
import Swipeout from 'react-native-swipeout';

class ProfilRecruteur extends Component {
    constructor(props) {
        super(props);
        this.mesOffres = Firebase.firestore().collection("OfferDetails").where("AuthId", "==", Firebase.auth().currentUser.uid);
        this.state = {
            isLoading: true,
            offres: [],
        };
      }
    componentDidMount() {
        this.unsubscribe = this.mesOffres.onSnapshot(this.getCollection); 
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    getCollection = (querySnapshot) => {
        const offres = [];
        querySnapshot.forEach((res) => {
          const {
            AuthId,
            title,
            nom, location, 
            salaireMin, salaireMax,
            expérience, étude,
            date, recruteur,
            poste, mission,
            tech,
          } = res.data();
    
          offres.push({
            key: res.id,
            res,
            title,
            nom, location, 
            salaireMin, salaireMax,
            expérience, étude,
            date, recruteur,
            poste, mission,
            tech,
            AuthId,
          });
        });

        this.setState({ offres, isLoading: false });
      }
    _renderItem = ({item, index}) => {
      let swipeBtns = [
        {
          text: 'Editer',
          backgroundColor: 'lightgrey',
          onPress: () =>  this.props.navigation.navigate('EditOffre', item) 
       },
        {
          text: 'Supprimer',
          backgroundColor: 'red',
          onPress: () => { 
            Alert.alert(
              '',
              'Voulez-vous supprimer cette offre?',
              [
                {
                  text: 'Annuler',
                  onPress: () => console.log('annuler'),
                  style: 'cancel'
                },
                {
                  text: 'Oui',
                  onPress: () => Firebase.firestore()
                  .collection("OfferDetails")
                  .doc(item.key).delete()
                  .catch((error) => console.log(error)),
                },
              ],
            );
           }
       }
      ];
        return (
          <Swipeout right={swipeBtns} backgroundColor= 'transparent'>
            <CardMesOffres item={item} />
          </Swipeout>
        );
    }

    render(){
          return (
            <SafeAreaView style={styles.container}>
              <FlatList 
                data={this.state.offres}
                keyExtractor={(item,index) => index.toString()}
                renderItem={this._renderItem}
                />
            </SafeAreaView> 
        );
    }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    marginTop: Constants.statusBarHeight,
  },
});

export default ProfilRecruteur;
