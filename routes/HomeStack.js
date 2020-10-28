import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Candidat from '../screens/Candidat';
import Filtrer from '../screens/Filtrer';
import RegisterUser from '../screens/RegisterUser';
import Header from '../components/Header';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null
        }
    },

    Candidat: {
        screen: Candidat,
        navigationOptions: {
            header: () => <Header />
        }
    },

    Filtrer: {
        screen: Filtrer
    },

    RegisterUser: {
        screen: RegisterUser,
        navigationOptions: {
            header: () => null
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);