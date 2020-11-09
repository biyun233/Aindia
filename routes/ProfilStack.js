import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Profil from '../screens/Profil';

const screens = {
    Profil: {
        screen: Profil,
        navigationOptions: {
            headerShown: false
        }
    }
    
}

const ProfilStack = createStackNavigator(screens);

export default ProfilStack;