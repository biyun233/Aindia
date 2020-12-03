import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Global from "../../utils/Global";

import { Title } from "react-native-paper";
import { Firebase } from "../../utils/Firebase";
import { Entypo } from "@expo/vector-icons";

class ProfilUser extends Component {
  constructor(props) {
    super();
    this.userInfos = Firebase.firestore()
      .collection("UsersInfos")
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
        firstname,
        lastname,
        status,
        phone,
        homeCity,
        postalCode,
        address,
        country,
        AuthId,
      } = res.data();

      userData.push({
        key: res.id,
        res,
        firstname,
        lastname,
        status,
        phone,
        homeCity,
        postalCode,
        address,
        country,
        AuthId,
      });
    });

    this.setState({ userData, isLoading: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infos}>
          <FlatList
            data={this.state.userData}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <View style={styles.details}>
                  <Title style={styles.infos}>
                    {item.lastname} {item.firstname}
                  </Title>
                  <Text style={styles.infos}>{item.status}</Text>
                  <Text style={styles.infos}>{item.address}</Text>
                  <Text style={styles.infos}>
                    {item.postalCode}, {item.homeCity}, {item.country}
                  </Text>
                </View>
                <View style={styles.iconStudies}>
                  <TouchableOpacity>
                    <Entypo
                      style={styles.icon}
                      name="edit"
                      size={17}
                      color="black"
                      onPress={() =>
                        this.props.navigation.navigate("EditUserProfil", item)
                      }
                    />
                  </TouchableOpacity>
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
    //flex: 1,
    //flexDirection: "column",
    backgroundColor: "white",
    //marginTop: Constants.statusBarHeight,
  },
  row: {
    flexDirection: "row",
    //justifyContent: "space-between",
    //height: "5",
    width: "100%",
    //padding: "4",
    //alignItems: "center",
  },
  icon: {
    //flexDirection: "row",
    marginTop: 4,
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-end",
    //marginLeft: "55%",
  },
  user: {},
  details: {
    //flexDirection: "row",
    marginTop: 2,
    marginLeft: 2,
    width: "93%",
    marginBottom: 2,
    fontWeight: "bold",
    alignItems: "flex-start",
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
    fontSize: 18,
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

export default ProfilUser;
