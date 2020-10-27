import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Header = props => {
    const { container, search, version } = styles;
    return (
        <View style={container}>
            <Ionicons 
                    style={search}
                    name={'ios-search'} 
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 38,
        marginVertical: 20,
        marginBottom: 20
    },

    search: {
        fontSize: 45,   
        color: "white"
    },
    version:{

    }
})

export default Header;