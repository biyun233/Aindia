
import React, { Component } from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import ProfilUser from '../Profil/ProfilUser';
import UserStudies from "../Studies/UserStudies";
import ExperienceUser from "../Experience/ExperienceUser";
import GoalUser from "../Goal/GoalUser";

class ProfilScreen extends Component {
  constructor(props){
    super();
    this.state = {
      isLoading: true,
    }; 
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ProfilUser navigation={this.props.navigation} />
          <GoalUser navigation={this.props.navigation} />
          <UserStudies navigation={this.props.navigation} />
          <ExperienceUser navigation={this.props.navigation} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //flexDirection: "column",
    backgroundColor: "white",
    //marginTop: Constants.statusBarHeight,
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

export default ProfilScreen;
