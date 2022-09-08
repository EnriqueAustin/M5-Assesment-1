//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { handleLogin } from './Backend/Authentication';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logInUser=() => {
        handleLogin(email,password);
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        })
        return unsubscribe;
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: '100', fontSize: 34, marginBottom: 10 }}>Welcome Back</Text>
            <Text style={{ marginBottom: 10, fontSize: 18 }}>
                Sign in to continue
            </Text>
            <View  style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(email) => {setEmail(email)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(password) => {setPassword(password)}}
                />

                <Text style={{fontWeight: '100', fontSize: 10}}>
                    Dont have a account, sign up now!
                </Text>

                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={{color:'white'}}>SignUp</Text>
                </TouchableOpacity>
            </View>
           
            

            <TouchableOpacity
                style={styles.button}
                onPress={logInUser}
            >
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"f4f4f",
        padding: 30,
        paddingTop: 130,
    },
    input: {
        height: 40,
        margin: 12,
        // borderWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
    },
    button:{
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        margin:30,
        borderRadius:10,
        position:'absolute',
        bottom:0,
        width: '100%',
    },
    button2:{
        margin: 10,
        backgroundColor: 'red',
        alignItems: "center",
        borderRadius:10,
        padding: 10,
        
    },
    form:{
        paddingTop:windowHeight * 0.10

    }
});

//make this component available to the app
export default Login;
