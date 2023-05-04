import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.background}>
    <View style={styles.container}>
        <Text style={styles.myHeader}>Quire</Text>
        <Text style={styles.greetingUser}>Welcome</Text>
        <Text style={styles.infotText}>In this app you will be able to create notes, delete them, edit your text and set some cool textstyle!</Text>
        <TouchableOpacity style={styles.buttonContinue}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: "#79A8D3",
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    container: {
        flex: 1,
        backgroundColor: "#79A8D3",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        padding: 25

    }, myHeader: {
        fontSize: 45,
        color: 'white',
        marginBottom: 80,
        marginTop: 100

    }, greetingUser: {
        fontSize: 25,
        color: 'white',
        marginBottom: 45
    
    }, infotText: {
        color: 'white',
        fontSize: 15

    }, buttonContinue: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 15,
        width: 150,
        alignItems: 'center',
        marginTop: 150

    }, buttonText: {
        color: '#79A8D3',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});