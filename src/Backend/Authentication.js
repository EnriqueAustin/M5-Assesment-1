import * as firebase from 'firebase';
import { Alert } from 'react-native';

export async function registration(email, password, name){
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        db.collection('user').doc(currentUser.uid).set({
                name: name,
                email: email,
                password: password,
            })
    } catch (error) {
        Alert.alert('There is something wrong', error.message)
    }
}

export async function handleLogin(email, password){
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        
    } catch (error) {
        Alert.alert('There is something wrong', error.message)
    }
}