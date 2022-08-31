import * as firebase from 'firebase';
import { Alert } from 'react-native';

export async function registration(email, password, name){
    try {
        await firebase.auth().createUserwithPasswordandEmail(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        db.collection('users')
            .doc(currentUser.uid)
            .set({
                email: email,
                firstName: name,
            })
    } catch (error) {
        Alert.alert('There is something wrong', error.message)
    }
}