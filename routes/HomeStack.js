import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Filtrer from '../screens/Filtrer';
import RegisterUser from '../screens/RegisterUser';
import Login from '../screens/LoginUser';
import BottomTab_candidat from './BottomTab_candidat';
import BottomTab_recruteur from './BottomTab_recruteur';
import OffreDetails from '../screens/OffreDetails';
import CreateProfilUser from '../screens/CreateProfilUser';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    TabRoute_candidat: {
        screen: BottomTab_candidat,
        navigationOptions: {
            headerShown: false
        }
    },
    TabRoute_recruteur: {
        screen: BottomTab_recruteur,
        navigationOptions: {
            headerShown: false
        }
    },
    
    RegisterUser: {
        screen: RegisterUser,
        navigationOptions: {
            headerShown: false
        }
    },
    Filtrer: {
        screen: Filtrer,
        navigationOptions: {
            title: "Filtrer",
            headerTintColor: "#254151",
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            headerBackTitle: "Candidat"
        }
    },
    OffreDetails: {
        screen: OffreDetails,
        navigationOptions: {
            title: " ",
            headerTintColor: "#254151",
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            headerBackTitle: "Candidat"
        }
    },
    CreateProfilUser: {
        screen: CreateProfilUser,
        navigationOptions: {
          title: "Création De Mon Profil",
          //header: null,
        },
    },
    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);