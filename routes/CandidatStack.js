import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Candidat from '../screens/Candidat';
import Header from '../components/Header';

const CandidatStack = createStackNavigator({
    Candidat: {
        screen: Candidat,
        navigationOptions: ({navigation}) => ({
            //header: () => <Header navigation={navigation}/>,
            headerShown: false
        })
    },
    
    
});


  
export default CandidatStack;