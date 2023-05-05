import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import NoteScreen from "./screens/NoteScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <NoteScreen style={{ flex: 1 }}></NoteScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
