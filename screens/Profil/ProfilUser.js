import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Title } from "react-native-paper";
import Global from '../../utils/Global';

class ProfilUser extends Component {

  constructor(props) {
    super();
    
  }

  render() {
    return (
      <View style={styles.container}>
         
        <View style={styles.infos}>
          <FlatList
            data={Global.user}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("EditUserProfil", item)
                }
              >
                <Title style={styles.infos}>
                  {item.lastname} {item.firstname}
                </Title>
                <Text style={styles.infos}>{item.status}</Text>
                <Text style={styles.infos}>{item.address}</Text>
                <Text style={styles.infos}>
                  {item.postalCode}, {item.homeCity}, {item.country}
                </Text>
              </TouchableOpacity>
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



export default ProfilUser;