import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Publier_offre from '../screens/Publier_offre';

const screens = {
    Publier: {
        screen: Publier_offre,
        navigationOptions: {
            headerTitle: "Publier Une Offre",
            headerStyle: {
                backgroundColor: '#254151',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20
            },
            headerLeft: null
        }
    }
    
}

const PublierStack = createStackNavigator(screens);

export default PublierStack;