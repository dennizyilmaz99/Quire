import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddNoteScreen = ({ navigation }) => {
  const [noteTitle, setNoteTitle] = useState("");

  const handleSaveNote = () => {
    navigation.navigate("Note", { title: noteTitle });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter note title"
        value={noteTitle}
        onChangeText={(text) => setNoteTitle(text)}
      />
      <Button title="Save Note" onPress={handleSaveNote} />
    </View>
  );
};

export default AddNoteScreen;
