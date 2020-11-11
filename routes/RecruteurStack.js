import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Recruteur from '../screens/Recruteur';
import Header_recruteur from '../components/Header_recruteur';

const RecruteurStack = createStackNavigator({
    Recruteur: {
        screen: Recruteur,
        navigationOptions: ({navigation}) => ({
            header: () => <Header_recruteur navigation= {navigation} />,
          })
        
    },
});


  
export default RecruteurStack;