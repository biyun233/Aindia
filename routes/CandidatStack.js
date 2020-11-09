import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Candidat from '../screens/Candidat';
import Filtrer from '../screens/Filtrer';
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons'; 

const CandidatStack = createStackNavigator({
    Candidat: {
        screen: Candidat,
        navigationOptions: ({navigation}) => ({
            header: <Header navigation= {navigation} />,
          })
        /*navigationOptions: {
            header: () => <Header />,
            /*tabBarLabel:"Accueil",
            tabBarIcon: ({ tintColor }) => (
                <AntDesign name="home" size={24} color={tintColor} />
              )
        }
        */
    },
    
    
});


  
export default CandidatStack;