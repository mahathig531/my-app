import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

export default function ListScreen({ navigation, items }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Description: {item.description}</Text>
          </View>
        )}
      />
      <Button title="Add Item" onPress={() => navigation.navigate('Add Item')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});
