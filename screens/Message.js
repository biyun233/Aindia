import React, {Component} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, SafeAreaView, Platform } from "react-native";
import { Button } from 'react-native-elements';
import { GiftedChat } from "react-native-gifted-chat";
import ChatFirebase from '../utils/ChatFirebase';
import Global from "../utils/Global";

export default class Message extends Component {
    state = {
        messages: [],
    };

    get user() {
        return {
            _id: ChatFirebase._id,
            name: Global.name,
        }
    }

    componentDidMount() {
        ChatFirebase.get(message => this.setState(prev => ({
            messages: GiftedChat.append(prev.messages, message),
        })))
    }

    componentWillUnmount() {
        ChatFirebase.off();
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={ChatFirebase.send} user={this.user}/>;

        if (Platform.OS === "android" || Platform.OS === "ios") {
            return (
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            );
        }

        return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
    };

};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EBEAEA",
        paddingBottom: 20
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#254151"
    },
});


