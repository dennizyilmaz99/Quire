import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Toolbar = ({}) => {
  const icons = [
    { name: "bold" },
    { name: "italic" },
    { name: "underline" },
    { name: "paint-brush" },
    { name: "list" },
    { name: "image" },
  ];

  return (
    <View style={styles.toolbarContainer}>
      {icons.map((icon) => (
        <View style={styles.toolbarButton} key={icon.name}>
          <TouchableOpacity onPress={icon.onPress}>
            <Icon name={icon.name} size={30} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toolbarContainer: {
    backgroundColor: "#79A8D3",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  toolbarButton: {
    margin: 2,
    padding: 11,
    width: 54,
  },
});

export default Toolbar;
