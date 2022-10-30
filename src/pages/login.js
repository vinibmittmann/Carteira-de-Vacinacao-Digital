import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import config from '../../config/config.json'


export default function LoginScreen({ navigation })  {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function SignIn() {
        let request = await fetch(config.url + 'login', {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              emailUser: email,
              passwordUser: password
            })
          })
        let res = await request.json();
        console.log(res);
    }
    
    return (
        <View style = {styles.container}>
            
            <Text style={styles.logo}>CARTEIRA</Text>
            <Text style={styles.logo}>DE VACINAÇÃO</Text>
            <Text style={[styles.logo, {paddingBottom: 115}]}>DIGITAL</Text>
            
            <TextInput
            style = {styles.textInput}
            placeholder = "CPF / e-mail"
            onChangeText = {(text)=>setEmail(text)}
            />

            <TextInput
            style = {styles.textInput}
            placeholder = "Senha"
            onChangeText = {(text)=>setPassword(text)}
            />

            <TouchableOpacity
            onPress = {() => navigation.navigate("SignUp")}
            >
                <Text style={styles.link}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress = {SignIn}
            >
                <Text style={styles.buttonTitle}>ENTRAR</Text>
                
            </TouchableOpacity>
        
        <StatusBar style="auto" />
        </View>
    );
};
