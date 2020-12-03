import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList, ScrollView, SafeAreaView, Text} from "react-native";
import { Firebase } from "../../utils/Firebase";
//import _ from 'lodash';
import Header_recruteur from '../../components/Header_recruteur';
import CardCandidat from '../../components/CardCandidat';
import Global from "../../utils/Global";

export default class Recruteur extends Component { 
    constructor(props) {
        super(props);
        this.goalUsers = Firebase.firestore().collection("goalUsers");
        this.state = {
            isLoading: true,
            userList: [],
            dataSearch: [],
            query: '',
        };
      }



    componentDidMount() {
        this.unsubscribe = this.goalUsers.onSnapshot(this.getCollection); 
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    getCollection = (querySnapshot) => {
        const userList = [];
        querySnapshot.forEach((res) => {
            userList.push(res.data());
        });
    
        this.setState({ userList, dataSearch: userList, isLoading: false });
      }
    _renderItem = ({item, index}) => {
        return (
         <TouchableOpacity onPress= { () => this.props.navigation.navigate("ProfilUserRecruiter", item) }>
             <CardCandidat item={item} />
         </TouchableOpacity>
        );
    }
    handle = (value) =>{
        this.setState({query: value});
        this.handleSearch();
    }

    handleSearch = () =>{
        var data = this.state.userList;
        var query = this.state.query;
        const formattedQuerry = query.toLowerCase();
        if(this.state.query == ''){
            this.setState({dataSearch: data});
        }
        else{
            data = data.filter(item => 
                item.domaine.toLowerCase().includes(formattedQuerry)
                );
        }
        this.setState({dataSearch: data});
        
    }
    render(){
          return (
            <SafeAreaView style={styles.container}>
                <Header_recruteur navigation={this.props.navigation} handle={this.handle}/>
                <ScrollView>
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
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EBEAEA",
        paddingBottom: 20
    },
});
