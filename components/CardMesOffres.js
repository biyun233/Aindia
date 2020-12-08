import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function CardMesOffres({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.line}>
        <Text style={styles.cardContent}>{item.title}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    elevation: 3,
    height: '80%',
    width: '96%',
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  line: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  cardContent: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#254151",
    marginVertical: 15,
  },
});
