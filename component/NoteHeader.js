import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Note() {
  return <Text style={styles.noteText}>Notes</Text>;
}

const styles = StyleSheet.create({
  noteText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
