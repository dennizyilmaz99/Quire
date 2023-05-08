import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ModalComp from "./ModalComp";

export default function AddNoteButton() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
