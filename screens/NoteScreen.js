import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef, useState, useEffect } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Toolbar from "../component/Toolbar";
import { useHeaderHeight } from "@react-navigation/elements";

const NoteScreen = ({ route }) => {
  const { note } = route.params;
  const [text, setText] = useState("");
  const [titleText, setTitleText] = useState(note.title || "Note Title");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        // Perform any necessary actions after the keyboard is dismissed
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Lyssna på tangentbordets synlighet
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    // Städa upp lyssnare vid unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    if (note && note.title) {
      fetchNoteText();
    }
  }, [note]);

  const fetchNoteText = async () => {
    try {
      const storedText = await AsyncStorage.getItem(`@note_${note.title}`);
      if (storedText !== null) {
        setText(storedText);
      }
    } catch (error) {
      console.log("Error fetching note text:", error);
    }
  };

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem(`@note_${note.title}`, text);
      navigation.navigate("Home", { note });
    } catch (error) {
      console.log("Error saving note:", error);
    }
  };

  const navigation = useNavigation();
  const [isHovered, setIsHovered] = React.useState(false);
  const noteInputRef = useRef(null);
  const [noteText, setNoteText] = useState("");
  const height = useHeaderHeight();

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const handleDeleteButton = () => {
    setText("");
  };

  const handlePress = async () => {
    await saveNote();
    navigation.goBack();
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
          setNoteText(savedNoteText);
        }
      } catch (error) {
        console.error("Error loading note text:", error);
      }
    };

    loadNoteText();
  }, []);

  useEffect(() => {
    saveNoteText(noteText);
  }, [noteText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ReturnButton
          onPress={handlePress}
          source={require("../icons/gobackicon.png")}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{titleText}</Text>
        </View>

        <DeleteButton
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handleDeleteButton}
          source={require("../icons/trashicon.png")}
          isHovered={isHovered}
        />
      </View>
      <View style={styles.inputContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContentContainer}
          keyboardShouldPersistTaps="handled"
          ref={scrollViewRef}
          keyboardDismissMode="interactive"
        >
          <View style={styles.noteInputWrapper}>
            <TextInput
              placeholder="Type here.."
              placeholderTextColor={"#bbbbbb"}
              style={styles.noteInput}
              multiline={true}
              value={text}
              onChangeText={setText}
            />
          </View>
          <KeyboardAvoidingView
            style={styles.doneButtonContainer}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={height + 120}
          >
            <Toolbar></Toolbar>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const ReturnButton = ({ onPress, source }) => {
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
      activeOpacity={1}
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
    fontSize: 24,
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
    flex: 1,
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
    right: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  image: {
    width: 30,
    height: 30,
  },
  deletebutton: {
    width: 40,
    height: 40,
  },
  deleteimage: {
    width: 50,
    height: 50,
  },
  hoveredImage: {
    tintColor: "red",
  },
  doneBtnKeyboardContainer: {
    backgroundColor: "black",
    bottom: 40,
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  doneButton: {
    bottom: 40,
    backgroundColor: "#black",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  doneButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default NoteScreen;
