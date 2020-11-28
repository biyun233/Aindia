import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from "react-native";

export default function FiltreItem ({item, pressHandler}) {
    const styleItem = (item.select == "false" ? styles.itemNonSelected : styles.itemSelected);
    return (
        <TouchableOpacity onPress={() => pressHandler(item)}>
            <Text style={styleItem}>{item.text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    itemNonSelected: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#254151",
        marginHorizontal: 15,
        marginVertical: 5,
        width: 100
    },

    itemSelected: {
        padding: 5,
        borderWidth: 1,
        backgroundColor: "#254151",
        color: "white",
        marginHorizontal: 15,
        marginVertical: 5,
        width: 100
    }
});

