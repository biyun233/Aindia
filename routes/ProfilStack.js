import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ProfilUser from '../screens/ProfilUser';
import EditUserProfil from '../screens/EditUserProfil';

const screens = {
    ProfilUser: {
        screen: ProfilUser,
        navigationOptions: {
          //title: 'Mon Profil',
          headerShown: false
        },
    },
    EditUserProfil: {
        screen: EditUserProfil,
        navigationOptions: {
          title: "Edition De Profil",
          
        },
    },
    
}

const ProfilStack = createStackNavigator(screens);

export default ProfilStack;