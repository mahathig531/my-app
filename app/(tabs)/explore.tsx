import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddItemScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    if (!name || !description) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    const newItem = { name, description };

    try {
      const storedItems = await AsyncStorage.getItem("items");
      const items = storedItems ? JSON.parse(storedItems) : [];
      items.push(newItem);
      await AsyncStorage.setItem("items", JSON.stringify(items));
      router.push("/");
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />
      <Button title="Add Item" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { marginVertical: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
});
