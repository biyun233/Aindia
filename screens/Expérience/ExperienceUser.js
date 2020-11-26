import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Firebase } from "../../utils/Firebase";
import { Entypo } from "@expo/vector-icons";

//import CreateAboutUser from "./CreateAboutUser";

class ExperienceUser extends Component {
  constructor(props) {
    super();
    this.userInfos = Firebase.firestore()
      .collection("experienceUsers")
      .where("AuthId", "==", Firebase.auth().currentUser.uid);
    this.state = {
      isLoading: true,
      userData: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.userInfos.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userData = [];
    querySnapshot.forEach((res) => {
      const { AuthId, domaine, responsability, organization, duration, description, date } = res.data();

      userData.push({
        key: res.id,
        res,
        domaine,
        responsability,
        organization,
        duration,
        description,
        date,
        AuthId,
      });
    });

    this.setState({ userData, isLoading: false });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.studiesContent}>
          <View style={styles.row}>
            <Text style={styles.experience}>Expériences </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CreateExperienceUser")
              }
            >
              <Text style={styles.addAbout}>Ajouter</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.state.userData}
            renderItem={({ item }) => (
              <View style={styles.separator}>
                <View style={styles.row}>
                  <View style={styles.details}>
                    <Text style={styles.item}>Domaine : {item.domaine}</Text>
                    <Text style={styles.item}>
                      Responsabilité : {item.responsability}
                    </Text>
                    <Text style={styles.item}>
                      Organisation d'Accueil: {item.organization}
                    </Text>
                    <Text style={styles.item}>Durée : {item.duration}</Text>
                    <Text style={styles.item}>Date : {item.date}</Text>
                    <Text style={styles.item}>Description : {item.description}</Text>
                  </View>
                  <View style={styles.iconStudies}>
                    <TouchableOpacity>
                      <Entypo
                        style={styles.iconStudies}
                        name="edit"
                        size={17}
                        color="black"
                        onPress={() =>
                          this.props.navigation.navigate(
                            "EditExperienceUser",
                            item
                          )
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    //flex: 1,
    backgroundColor: "white",
  },
  separator: {
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    //justifyContent: "space-around",
    width: "100%",
    //alignItems: "center",
  },
  addAbout: {
    fontWeight: "bold",
  },
  experience: {
    //flexDirection: "row",
    marginTop: 2,
    marginLeft: 4,
    width: "80%",
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  details: {
    //flexDirection: "row",
    marginTop: 2,
    marginLeft: 4,
    width: "93%",
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  item: {
    marginLeft: 4,
    margin: 2,
  },
  icon: {
    //flexDirection: "row",
    marginTop: 3,
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-end",
    marginLeft: "60%",
  },
  iconStudies: {
    marginTop: 3,
    //marginLeft: "94%",
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

export default ExperienceUser;
