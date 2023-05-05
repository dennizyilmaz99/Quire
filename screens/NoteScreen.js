import React, { useRef } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import Deletenotebutton from "../components/Deletenotebutton";

const NoteScreen = () => {
  const noteInputRef = useRef(null);

  const handleDoneButton = () => {
    Keyboard.dismiss();
    noteInputRef.current.blur();
  };

  const handleDeleteButton = () => {
    console.log("Delete button pressed");
  };

  const handlePress = () => {
    //DELETE NOTE ON PRESS HERE
    console.log("Button Pressed!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ReturnButton
          onPress={handlePress}
          source={require("../icons/gobackicon.png")}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Note Title</Text>
        </View>

        <Deletenotebutton style={{ marginRight: 16 }} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inputContainer}>
          <View style={styles.noteInputWrapper}>
            <TextInput
              ref={noteInputRef}
              style={styles.noteInput}
              multiline
              placeholder="Enter your note here..."
              autoFocus // Optional: Automatically focus on the input box when the screen loads
              textAlignVertical="top" // Align the text to the top left
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.doneButtonContainer}>
        <DoneButton
          source={require("../icons/doneicon.png")}
          onPress={handleDoneButton}
        />
      </View>
    </View>
  );
};

const ReturnButton = ({ onPress, source }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

const DoneButton = ({ onPress, source }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    height: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  deletenote: {
    marginRight: 10,
  },

  scrollContentContainer: {
    flexGrow: 1,
  },
  inputContainer: {
    width: "100%",
  },
  noteInputWrapper: {
    width: "100%",
    maxWidth: 500,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    width: "100%",
    minWidth: 360,
    minHeight: 500,
    marginBottom: 16,
  },
  returnButtonContainer: {
    position: "absolute",
    top: 16,
    left: 16,
    marginVertical: 20,
  },
  doneButtonContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 30,
    height: 30,
  },
  hoveredButton: {
    backgroundColor: "white",
  },
  image: {
    width: 30,
    height: 30,
    // Add any other desired styles
  },
});

export default NoteScreen;
