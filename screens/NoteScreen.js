import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";

const NoteScreen = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const noteInputRef = useRef(null);
  const [noteText, setNoteText] = useState("");

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const handleDoneButton = () => {
    Keyboard.dismiss();
    noteInputRef.current.blur();
  };

  const handleDeleteButton = () => {
    setNoteText("");
    console.log("Deleted");
  };

  const handlePress = () => {
    //DELETE NOTE ON PRESS HERE

    console.log("Button Pressed!");
  };

  const saveNoteText = async (text) => {
    try {
      await AsyncStorage.setItem("noteText", text);
    } catch (error) {
      console.error("Error saving note text:", error);
    }
  };

  useEffect(() => {
    const loadNoteText = async () => {
      try {
        const savedNoteText = await AsyncStorage.getItem("noteText");
        if (savedNoteText !== null && savedNoteText !== "") {
          updateNoteText(savedNoteText);
        }
      } catch (error) {
        console.error("Error loading note text:", error);
      }
    };

    loadNoteText();
  }, []);

  const updateNoteText = (text) => {
    saveNoteText(text);
    setNoteText(text);
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

        <DeleteButton
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handleDeleteButton}
          source={require("../icons/trashicon.png")}
          isHovered={isHovered}
        />
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
              autoFocus
              textAlignVertical="top"
              value={noteText}
              onChangeText={setNoteText}
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

const DeleteButton = ({
  onPress,
  onPressIn,
  onPressOut,
  source,
  isHovered,
}) => {
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

export default NoteScreen;
