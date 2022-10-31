import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import config from '../../config/config.json'


export default function LoginScreen({ navigation })  {
    const [email, setEmailUser] = useState(null);
    const [password, setPasswordUser] = useState(null);

    async function SignInUser() {
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
            <Text>
                {password}, {email}
            </Text>
            <Text style={styles.logo}>CARTEIRA</Text>
            <Text style={styles.logo}>DE VACINAÇÃO</Text>
            <Text style={[styles.logo, {paddingBottom: 115}]}>DIGITAL</Text>
            
            <TextInput
            style = {styles.textInput}
            placeholder = "CPF / e-mail"
            onChangeText = {(text)=>setEmailUser(text)}
            />

            <TextInput
            style = {styles.textInput}
            placeholder = "Senha"
            secureTextEntry = {true}
            onChangeText = {(text)=>setPasswordUser(text)}
            />

            <TouchableOpacity
            onPress = {null}
            >
                <Text style={styles.link}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress = {SignInUser}
            >
                <Text style={styles.buttonTitle}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {() => navigation.navigate("LoginWorker")}
            >
                <Text >Login Profissional</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {() => navigation.navigate("SignUp")}
            >
                <Text >Adicionar Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {() => navigation.navigate("SignUpWorker")}
            >
                <Text >Adicionar Profissional</Text>
            </TouchableOpacity>
        
        <StatusBar style="auto" />
        </View>
    );
};
