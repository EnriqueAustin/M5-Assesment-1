//import liraries
import React, { Component, useState } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const SignUp = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: '100', fontSize: 34, marginBottom: 10 }}>Welcome</Text>
            <Text style={{ marginBottom: 10, fontSize: 18 }}>
                SignUp to continue
            </Text>
            <View  style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChange={(name) => {setName(name)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChange={(email) => {setEmail(email)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChange={(password) => {setPassword(password)}}
                />

                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{color:'white'}}>Login</Text>
                </TouchableOpacity>
  
            </View>
           
            

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={{color:'white'}}>SignUp</Text>
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
export default SignUp;
