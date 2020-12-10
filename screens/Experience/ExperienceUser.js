import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";
import { Firebase } from "../../utils/Firebase";
import Swipeout from "react-native-swipeout";

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
      const {
        AuthId,
        domaine,
        responsability,
        organization,
        duration,
        description,
        date,
      } = res.data();

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
  deleteItem(item) {
    Alert.alert("", "Voulez-vous supprimer cette expérience?", [
      {
        text: "Annuler",
        onPress: () => console.log("annuler"),
        style: "cancel",
      },
      {
        text: "Oui",
        onPress: () =>
          Firebase.firestore()
            .collection("experienceUsers")
            .doc(item.key)
            .delete()
            .catch((error) => console.log(error)),
      },
    ]);
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() =>
          this.props.navigation.navigate("EditExperienceUser", item)
      }
      >
        <View style={styles.card}>
          <View style={styles.details}>

            <Text style={styles.itemTitle}>{item.responsability}</Text>

            <Text style={styles.itemTitle}>Chez {item.organization}</Text>

            <Text style={styles.itemStyle}>{item.description}</Text>

            <Text style={styles.itemTitle}>Pendant {item.duration} -- {item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
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
          <FlatList data={this.state.userData} renderItem={this._renderItem} />
        </View>
      </SafeAreaView>
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
  rowI: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  item: {
    marginLeft: 4,
    margin: 2,
    marginTop: 4,
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  itemTitle: {
    marginLeft: 10,
    margin: 3,
    fontSize: 17,
    fontWeight: "bold",
  },
  itemStyle: {
    marginLeft: 10,
    margin: 3,
    fontSize: 17,
    //width: "80%",
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
    fontSize: 17,
  },
  experience: {
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
    marginTop: 2,
    marginLeft: 4,
    width: "98%",
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  /*item: {
    marginLeft: 4,
    margin: 2,
  },*/
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
