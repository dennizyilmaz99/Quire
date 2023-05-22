import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function Deletenotebutton() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const handlePress = () => {
    //DELETE NOTE ON PRESS HERE
    console.log("Button Pressed!");
  };

  return (
    <View style={styles.container}>
      <ImageButton
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        source={require("../icons/trashicon.png")}
        isHovered={isHovered}
      />
    </View>
  );
}

const ImageButton = ({ onPress, onPressIn, onPressOut, source, isHovered }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.button, isHovered && styles.hoveredButton]}
      activeOpacity={1} // Set activeOpacity to 1
    >
      <Image
        source={source}
        style={[styles.image, isHovered && styles.hoveredImage]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  deletebutton: {
    backgroundColor: "white",
    width: 40,
    height: 40,
  },
  hoveredButton: {
    backgroundColor: "white",
  },
  deleteimage: {
    width: 30,
    height: 30,
    // Add any other desired styles
  },
  hoveredImage: {
    tintColor: "red",
  },
});
