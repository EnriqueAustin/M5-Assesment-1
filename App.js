import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as firebase from 'firebase'

import Login from './src/Login';
import Home from './src/Home/Home';
import Details from './src/Home/Details';
import Onboarding from './src/Onboarding';
import firebaseConfig from './src/firebaseConfig';
import SignUp from './src/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {

  if(!firebase.apps.length){
    console.log('Fireabse is connected');
    firebase.initializeApp(firebaseConfig)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{title:"Home"}} />
        <Stack.Screen name="Detail" component={Details} options={{title:"Locations"}} />
      </Stack.Navigator>
   
    </NavigationContainer>
   
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
