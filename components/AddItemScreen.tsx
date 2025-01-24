import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddItemScreen({ navigation, items, setItems }: any) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = () => {
    if (!name.trim() || !description.trim()) {
      Alert.alert('Validation Error', 'Both fields are required!');
      return;
    }

    const newItem = { name, description };
    setItems([...items, newItem]);
    navigation.goBack(); // Navigate back to the list screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});
