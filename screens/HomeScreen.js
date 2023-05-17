import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../component/SearchBar";
import AppHeader from "../component/AppHeader";
import Note from "../component/NoteHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {

  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("@notes");
      if (storedNotes !== null) {
        const parsedNotes = JSON.parse(storedNotes);
        setNotes(parsedNotes);
      }
    } catch (error) {
      console.log("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  const addNote = async () => {
    if (newNoteTitle.trim() === "") {
      // Title is empty, display an error message
      console.log("Title cannot be empty.");
      return;
    }

    if (notes.some((note) => note.title === newNoteTitle)) {
      // Note with the same title already exists, display an error message
      console.log("A note with the same title already exists.");
      return;
    }

    const newNote = { title: newNoteTitle, text: "" };
    const updatedNotes = [...notes, newNote];
    await AsyncStorage.setItem("@notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    setNewNoteTitle("");
    setModalVisible(false);
  };

  const deleteNote = async (note) => {
    const updatedNotes = notes.filter((n) => n.title !== note.title);
    await AsyncStorage.setItem("@notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const renderNoteItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          title={item.title}
          onPress={() => navigation.navigate("NoteScreen", { note: item })}
        />
        <TouchableOpacity onPress={() => deleteNote(item)}>
          <Text style={{ color: "red", marginLeft: 10 }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <StatusBar style="auto" />
        <SafeAreaView>
          <AppHeader />
          <SearchBar />
          <View style={styles.noteView}>
            <Note />
          </View>

          <Modal
            visible={modalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <View style={styles.topModalView}>
                    <Text style={styles.modalHeader}>Add Note Title</Text>
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={{ height: 20, width: 20 }}
                    >
                      <Text style={{ top: 5 }}>X</Text>
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    style={styles.titleInput}
                    placeholder="Title"
                    value={newNoteTitle}
                    onChangeText={setNewNoteTitle}
                  />
                  <TouchableOpacity
                    style={styles.modalAddNoteButton}
                    onPress={addNote}
                  >
                    <Text style={styles.modalAddText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <FlatList
            data={notes}
            renderItem={renderNoteItem}
            keyExtractor={(item, index) => `${item.title}-${index}`}
          />
        </SafeAreaView>
        <TouchableOpacity
          style={styles.addNoteButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addNoteText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#79A8D3",
  },

  subContainer: {
    flex: 1,
    margin: 30,
  },

  noteView: {
    height: 100,
    width: "100%",
    top: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  modalHeader: {
    fontSize: 23,
    fontWeight: "bold",
  },

  modalContent: {
    width: "70%",
    height: "23%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  titleInput: {
    top: 23,
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 9,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "grey",
  },

  topModalView: {
    top: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  modalAddNoteButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 100,
    backgroundColor: "#79A8D3",
    alignSelf: "center",
    top: 45,
    borderRadius: 5,
  },

  modalAddText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },

  addNoteButton: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 40,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 100,
  },

  addNoteText: {
    marginBottom: 4,
    color: "#79A8D3",
    fontSize: 45,
  },
});
