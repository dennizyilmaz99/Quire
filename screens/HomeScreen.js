import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SearchBar from "../component/SearchBar";
import AppHeader from "../component/AppHeader";
import Note from "../component/NoteHeader";
import AddNoteButton from "../component/AddNoteButton";

export default function HomeScreen() {
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
      </SafeAreaView>
      <AddNoteButton />
    </View>
  </View>
  )
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
  });