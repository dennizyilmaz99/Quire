import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style={{ bottom: 10, color: "white", fontSize: 15 }}>
        Here you can search for your notes!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Search Note"
        keyboardType="default"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 30,
    margin: 12,
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "grey",
  },
});
