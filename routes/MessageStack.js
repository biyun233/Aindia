import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Message from '../screens/Message';

const screens = {
    Message: {
        screen: Message,
        navigationOptions: {
            headerShown: false
        }
    }
    
}

const MessageStack = createStackNavigator(screens);

export default MessageStack;