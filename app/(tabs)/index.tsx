import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Item {
  name: string;
  description: string;
}

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]); // State for items
  const [isEditing, setIsEditing] = useState<number | null>(null); // Track which item is being edited
  const [editText, setEditText] = useState<string>(""); // Input for editing item
  const router = useRouter(); // Navigation router

  // Load items from AsyncStorage on component mount
  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("items");
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };
    loadItems();
  }, []);

  // Save updated items to AsyncStorage
  const saveItems = async (updatedItems: Item[]) => {
    try {
      await AsyncStorage.setItem("items", JSON.stringify(updatedItems));
      setItems(updatedItems);
    } catch (error) {
      console.error("Error saving items:", error);
    }
  };

  // Delete an item
  const deleteItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    saveItems(updatedItems);
  };

  // Start editing an item
  const startEditing = (index: number) => {
    setIsEditing(index);
    setEditText(items[index].name); // Pre-fill input with the current value
  };

  // Update an item
  const updateItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].name = editText; // Update the name
    saveItems(updatedItems);
    setIsEditing(null); // Exit editing mode
  };

  return (
    <View style={styles.container}>
      {/* List of items */}
      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            {isEditing === index ? (
              <TextInput
                style={styles.input}
                value={editText}
                onChangeText={setEditText}
              />
            ) : (
              <>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </>
            )}

            <View style={styles.buttonGroup}>
              {isEditing === index ? (
                <Button title="Save" onPress={() => updateItem(index)} />
              ) : (
                <Button title="Edit" onPress={() => startEditing(index)} />
              )}
              <Button
                title="Delete"
                color="red"
                onPress={() =>
                  Alert.alert(
                    "Delete Item",
                    "Are you sure you want to delete this item?",
                    [
                      { text: "Cancel", style: "cancel" },
                      { text: "Delete", onPress: () => deleteItem(index) },
                    ]
                  )
                }
              />
            </View>
          </View>
        )}
      />

      {/* Navigate to Add Item Screen */}
      <Button title="Add New Item" onPress={() => router.push("/explore")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  item: {
    marginBottom: 12,
    padding: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginBottom: 8,
    borderRadius: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
});
