import React from "react";
import { StyleSheet, View } from "react-native";
import Deletenotebutton from "./components/Deletenotebutton";

export default function App() {
  return (
    <View style={styles.container}>
      <Deletenotebutton></Deletenotebutton>
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
