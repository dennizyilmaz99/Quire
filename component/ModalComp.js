import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function ModalComp({ visible, onClose }) {
  const navigation = useNavigation()

//Coment

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.topModalView}>
            <Text style={styles.modalHeader}>Add Note Title</Text>
            <TouchableOpacity onPress={onClose} style={{height: 20, width: 20}}>
              <Text style={{ top: 5 }}>X</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.titleInput}
            placeholder="Title"
            keyboardType="default"
          />
          <TouchableOpacity
            style={styles.modalAddNoteButton}
            onPress={() => {navigation.navigate('NoteScreen');
            onClose();
          }}
          >
            <Text style={styles.modalAddText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },

  modalHeader: {
    fontSize: 23,
    fontWeight: "bold",
  },

  modalContent: {
    width: "80%",
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
    top: 15,
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 9,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "grey",
  },

  topModalView: {
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
    top: 30,
    borderRadius: 5,
  },

  modalAddText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
