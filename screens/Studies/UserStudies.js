import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { Firebase } from "../../utils/Firebase";
import Swipeout from "react-native-swipeout";
class UserStudies extends Component {
  constructor(props) {
    super();
    this.userInfos = Firebase.firestore()
      .collection("studiesUsers")
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
      const { AuthId, domaine, level, name, school, date } = res.data();

      userData.push({
        key: res.id,
        res,
        domaine,
        level,
        name,
        school,
        date,
        AuthId,
      });
    });

    this.setState({ userData, isLoading: false });
  };

  deleteItem(item) {
    Alert.alert("", "Voulez-vous supprimer cette formation?", [
      {
        text: "Annuler",
        onPress: () => console.log("annuler"),
        style: "cancel",
      },
      {
        text: "Oui",
        onPress: () =>
          Firebase.firestore()
            .collection("studiesUsers")
            .doc(item.key)
            .delete()
            .catch((error) => console.log(error)),
      },
    ]);
  }


  _renderItem = ({ item, index }) => {
    let swipeBtns = [
      {
        text: "Editer",
        backgroundColor: "lightgrey",
        onPress: () => this.props.navigation.navigate("EditStudiesUser", item),
      },
      {
        text: "Supprimer",
        backgroundColor: "red",
        onPress: () => this.deleteItem(item),
      },
    ];
    return (
      <TouchableOpacity onPress={() =>
          this.props.navigation.navigate("EditStudiesUser", item)
      }
      >
        <View style={styles.card}>
          <View style={styles.details}>

            <Text style={styles.itemTitle}>{item.school}</Text>

            <Text style={styles.itemTitle}>{item.level}</Text>

            <Text style={styles.itemStyle}>{item.domaine}</Text>

            <Text style={styles.itemStyle}>{item.name}</Text>

            <Text style={styles.itemTitle}>{item.date}</Text>

          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.experience}>Formations </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CreateStudiesUser")
              }
            >
              <Text style={styles.addAbout}>Ajouter</Text>
            </TouchableOpacity>
          </View>
          <FlatList data={this.state.userData} renderItem={this._renderItem} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
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
  item: {
    marginLeft: 4,
    margin: 2,
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
    marginVertical: 2,
  },
  row: {
    flexDirection: "row",
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
    marginTop: 1,
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-end",
    marginLeft: "60%",
  },
  iconStudies: {
    marginTop: 3,
    marginLeft: -40,
    paddingRight: 15,
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

export default UserStudies;
