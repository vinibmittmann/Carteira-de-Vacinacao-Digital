import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'
import config from '../../config/config.json'


export default function UserSignUpScreen({ navigation }) {
  const[name, setName] = useState(null);
  const[cpf, setCpf] = useState(null);
  const[password, setPassword] = useState(null);
  const[password2, setPassword2] = useState(null);
  const[email, setEmail] = useState(null);
  const[birth, setBirth] = useState(null);

  async function registerUser() {
    if (password == password2) {
      let request = await fetch(config.url + 'register', {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          nameUser: name,
          cpfUser: cpf,
          emailUser: email,
          passwordUser: password,
          birthUser: new Date(birth)
        })
      })
    }
  }
  
  return (
    <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder = "Nome"
          onChangeText = {(text)=>setName(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder = "CPF"
          onChangeText = {(text)=>setCpf(text)}
        />

        <TextInput
          style = {styles.textInput}
          placeholder = "E-mail"
          onChangeText = {(text)=>setEmail(text)}
        />

        <TextInput
          style = {styles.textInput}
          placeholder = "Data de nascimento"
          onChangeText = {(text)=>setBirth(text)}
        />
        
        <TextInput
          style = {styles.textInput}
          placeholder = "Senha"
          onChangeText = {(text)=>setPassword(text)}
          secureTextEntry = {true}
        />

        <TextInput
          style = {styles.textInput}
          placeholder = "Confirmar senha"
          onChangeText = {(text)=>setPassword2(text)}
          secureTextEntry = {true}
        />

        <TouchableOpacity
          style = {styles.buttonPaciente}
          onPress = {registerUser}
          >
            <Text style = {styles.buttonTitle}>Confirmar Cadastro</Text>
          </TouchableOpacity>
        
      <StatusBar style="auto" />
    </View>
  );
};
