import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ModalComp({ visible, onClose }) {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  

 /*const handleAddNote = () => {
    
      navigation.navigate("NoteScreen")
      onClose();
    
  }; */

  const handleAddNote = () => {
    navigation.navigate('NoteScreen', { title: title });
    onClose();
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContent}>
              <View style={styles.topModalView}>
                <Text style={styles.modalHeader}>Add Note Title</Text>
                <TouchableOpacity
                  onPress={onClose}
                  style={{ height: 20, width: 20 }}
                >
                  <Text style={{ top: 5 }}>X</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.titleInput}
                placeholder="Title"
                keyboardType="default"
                onChangeText={(text) => setTitle(text)}
              />
              <TouchableOpacity
                style={styles.modalAddNoteButton}
                onPress={handleAddNote}
              >
                <Text style={styles.modalAddText}>Add</Text>
              </TouchableOpacity>
              
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
});
