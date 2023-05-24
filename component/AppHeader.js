import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddNoteButton() {
  return <Text style={styles.appHeader}>Quire</Text>;
}

const styles = StyleSheet.create({
  appHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
});
