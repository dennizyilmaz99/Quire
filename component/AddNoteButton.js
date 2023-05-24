import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ModalComp from "./ModalComp";
import { ErrorContext } from "./ErrorContext";

export default function AddNoteButton() {
  const [modalVisible, setModalVisible] = useState(false);
  const {error, setError} = useContext(ErrorContext)

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setError(false)

  };

  return (
    <TouchableOpacity onPress={openModal} style={styles.addNoteButton}>
      <ModalComp visible={modalVisible} onClose={closeModal} />
      <Text style={styles.addNoteText}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
