import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ProfilRecruStack from "./ProfilRecruStack";
import RecruteurStack from "./RecruteurStack";
import MessageStack from "./MessageStack";
import PublierStack from "./PublierStack";

const BottomTabNavigator = createBottomTabNavigator({
  Accueil_recruteur: {
    screen: RecruteurStack,
    navigationOptions: {
      headerShown: false,
      tabBarLabel: "Accueil",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="home" size={24} color={tintColor} />
      ),
    },
  },
  publier: {
    screen: PublierStack,
    navigationOptions: {
      headerShown: false,
      tabBarLabel: "Publier",
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="add-to-queue" size={24} color={tintColor} />
      ),
    },
  },
  Message: {
    screen: MessageStack,
    navigationOptions: {
      headerShown: false,
      tabBarLabel: "Message",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="message1" size={24} color={tintColor} />
      ),
    },
  },

  MonProfil: {
    screen: ProfilRecruStack,
    navigationOptions: {
      headerShown: false,
      tabBarLabel: "Mon Compte",
      tabBarIcon: ({ tintColor }) => (
        <Fontisto name="person" size={24} color={tintColor} />
      ),
    },
  },
});

export default BottomTabNavigator;
