
import React, { Component } from "react";
import Constants from "expo-constants";
import {
    View, StatusBar, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, SafeAreaView
} from "react-native";
import CardMesOffres from '../../components/CardMesOffres';
import { Firebase } from "../../utils/Firebase";

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
            offres.push(res.data());
        });
    
        this.setState({ offres, isLoading: false });
      }
    _renderItem = ({item, index}) => {
        return (
         <TouchableOpacity onPress={() => this.props.navigation.navigate('EditOffre', item)}>
             <CardMesOffres item={item} />
         </TouchableOpacity>
        );
    }

    render(){
          return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View>
                        <FlatList 
                                data={this.state.offres}
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
    flexDirection: "column",
    backgroundColor: "white",
    marginTop: Constants.statusBarHeight,
  },
  details: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  studiesContent: {
    borderRadius: 1,
    elevation: 3,
    backgroundColor: "#254151",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowColor: "white",
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 2,
  },
  infos: {
    marginLeft: 6,
    fontWeight: "bold",
  },
  description: {
    backgroundColor: "white",
    borderRadius: 8,
    //padding: 2,
    //marginBottom: 2
  },
  separator: {
    borderBottomWidth: 1,
  },
});

export default ProfilRecruteur;
