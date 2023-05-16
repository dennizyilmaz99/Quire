import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import NoteScreen from './screens/NoteScreen';
import HomeScreen from './screens/HomeScreen';
import { ErrorContext } from './component/ErrorContext';
import { useState } from 'react';
const Stack = createStackNavigator();


function NoteStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="NoteScreen" component={NoteScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {

  const [error, setError] = useState(false)

  return (
    <ErrorContext.Provider value={{error, setError}}>
    <NavigationContainer>
      <NoteStackScreen />
    </NavigationContainer>
    </ErrorContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});