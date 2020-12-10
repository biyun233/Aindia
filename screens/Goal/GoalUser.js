import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Firebase } from "../../utils/Firebase";
import { Entypo } from "@expo/vector-icons";

import Global from "../../utils/Global";

//import CreateAboutUser from "./CreateAboutUser";

class GoalUser extends Component {
  constructor(props) {
    super();
    this.userInfos = Firebase.firestore()
        .collection("UsersInfos")
        .where("AuthId", "==", Firebase.auth().currentUser.uid);
    this.userGoalInfos = Firebase.firestore()
        .collection("goalUsers")
        .where("AuthId", "==", Firebase.auth().currentUser.uid);
    this.state = {
      isLoading: true,
      userData: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.userGoalInfos.onSnapshot(this.getCollection);
    this.unsubscribe_1 = this.userInfos.onSnapshot(this.getCollection_1);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userData = [];
    querySnapshot.forEach((res) => {
      const {
        AuthId,
        domaine,
        wantedJob,
        availability,
        workingTime,
        description,
      } = res.data();

      userData.push({
        key: res.id,
        res,
        domaine,
        wantedJob,
        availability,
        workingTime,
        description,
        AuthId,
      });
    });

    this.setState({ userData, isLoading: false });
  };

  getCollection_1 = (querySnapshot) => {
    const userInfos = [];
    querySnapshot.forEach((res) => {
      userInfos.push(res.data());
    });

    this.setState({ userInfos: userInfos });
    Global.name = userInfos[0].firstname + " " + userInfos[0].lastname;
    Global.user = userInfos;
  };

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.card}>
            <FlatList
                data={this.state.userData}
                renderItem={({ item }) => (
                    <View>
                      <View style={styles.row}>
                        <Text style={styles.goal}>Mon Objectif </Text>
                        <TouchableOpacity>
                          <Text style={styles.iconStudies}></Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.card}>
                        <View style={styles.row}>
                          <View style={styles.details}>
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate("EditGoalUser", item)
                            }
                            >
                              <Text style={styles.itemStyle}>Mon Secteur ->
                                <Text style={[styles.itemStyle, {fontWeight: 'normal'}]}> {item.domaine}</Text>
                              </Text>

                              <Text style={styles.itemStyle}>Poste Recherché ->
                                <Text style={[styles.itemStyle, {fontWeight: 'normal'}]}> {item.wantedJob}</Text>
                              </Text>

                              <Text style={styles.itemStyle}>Disponibilité ->
                                <Text style={[styles.itemStyle, {fontWeight: 'normal'}]}> {item.availability}</Text>
                              </Text>

                              <Text style={styles.itemStyle}>Durée ->
                                <Text style={[styles.itemStyle, {fontWeight: 'normal'}]}> {item.workingTime}</Text>
                              </Text>

                              <Text style={styles.itemDescription}>{item.description}</Text>
                            </TouchableOpacity>


                          </View>

                        </View>
                      </View>
                    </View>
                )}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    //flex: 1,
    backgroundColor: "white",
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    //elevation: 3,
    height: "100%",
    width: "98%",
    backgroundColor: "white",
    //shadowOffset: {width:1, height:1},
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  itemStyle: {
    marginLeft: 10,
    margin: 3,
    fontSize: 17,
    fontWeight: "bold",
    //width: "80%",
  },
  itemDescription: {
     marginLeft: 10,
    margin: 2,
    fontSize: 17,
  },
  separator: {
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    //justifyContent: "space-between",
    //height: "5",
    width: "100%",
    //padding: "4",
    //alignItems: "center",
  },
  addAbout: {
    fontWeight: "bold",
    fontSize: 17,
  },
  goal: {
    //flexDirection: "row",
    marginTop: 2,
    marginLeft: 4,
    width: "80%",
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-start",
    fontSize: 17,
  },
  details: {
    //flexDirection: "row",
    marginTop: 3,
    marginLeft: 4,
    width: "93%",
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-start",
    //backgroundColor: "red"
  },
  item: {
    marginLeft: 4,
    margin: 2,
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  icon: {
    //flexDirection: "row",
    marginTop: 1,
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-end",
    marginLeft: "60%",
  },
  iconStudies: {
    marginTop: 3,
    fontWeight: "bold",
    //marginLeft: "90%",
  },
  studiesContent: {
    padding: 0,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 2,
  },
});

export default GoalUser;
