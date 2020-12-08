import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Message from '../screens/Message';

const screens = {
    Message: {
        screen: Message,
        navigationOptions: {
            headerLeft: null,
            title: "Message",
            headerStyle: {
                backgroundColor: "#254151",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
            },
        }
    }
    
}

const MessageStack = createStackNavigator(screens);

export default MessageStack;
