import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CandidatStack from './CandidatStack';
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import ProfilStack from './ProfilStack';
import MessageStack from './MessageStack';

const BottomTabNavigator = createBottomTabNavigator({
    Accueil: {
        screen: CandidatStack,
        navigationOptions: {
            headerShown: false,
            tabBarLabel:"Accueil",
            tabBarIcon: ({ tintColor }) => (
                <AntDesign name="home" size={24} color={tintColor} />
              )
        }
    },
    Message: {
        screen: MessageStack,
        navigationOptions: {
            headerShown: false,
            tabBarLabel:"Message",
            tabBarIcon: ({ tintColor }) => (
                <AntDesign name="message1" size={24} color={tintColor} />
              )
        }
    },
    MonProfil: {
        screen: ProfilStack,
        navigationOptions: {
            headerShown: false,
            tabBarLabel:"Mon Profil",
            tabBarIcon: ({ tintColor }) => (
                <Fontisto name="person" size={24} color={tintColor} />
              )
        }
    }
})


export default BottomTabNavigator;