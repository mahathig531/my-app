import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ItemCard({ item }: { item: { name: string; description: string } }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  title: { fontWeight: "bold", fontSize: 18 },
  description: { fontSize: 14, color: "#555" },
});
