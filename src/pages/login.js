import React, {useState, useContext} from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles'
import {AuthContext} from '../contexts/auth'


export default function LoginScreen({ navigation })  {
    const [email, setEmailUser] = useState(null);
    const [password, setPasswordUser] = useState(null);
    const {login, error} = useContext(AuthContext);
    
    return (
        <View style = {styles.container}>
            <Text style={styles.logo}>CARTEIRA</Text>
            <Text style={styles.logo}>DE VACINAÇÃO</Text>
            <Text style={[styles.logo, {paddingBottom: 100}]}>DIGITAL</Text>
            
            <Text style={styles.error}> {error} </Text>
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
            onPress = {() => login(email, password)}
            >
                <Text style={styles.buttonTitle}>ENTRAR</Text>
            </TouchableOpacity>
        
        <StatusBar style="auto" />
        </View>
    );
};