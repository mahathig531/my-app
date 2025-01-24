import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HomeScreen() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadItems = async () => {
      const storedItems = await AsyncStorage.getItem("items");
      if (storedItems) setItems(JSON.parse(storedItems));
    };
    loadItems();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      <Button title="Add New Item" onPress={() => router.push("/explore")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { marginBottom: 12 },
  name: { fontSize: 16, fontWeight: "bold" },
  description: { fontSize: 14, color: "gray" },
});
