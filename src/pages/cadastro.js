import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles'
import config from '../../config/config.json'


export default function CadastroPacienteScreen({ navigation }) {
  const[name, setName] = useState(null);
  const[password, setPassword] = useState(null);
  const[email, setEmail] = useState(null);

  async function registerUser() {
    let request = await fetch(config.url + 'register', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nameUser: name,
        emailUser: email,
        passwordUser: password
      })
    })
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style ={styles.title}>Novo Usuário</Text>
      </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          placeholder = "Nome"
          onChangeText = {(text)=>setName(text)}
        />

        <TextInput
          style = {styles.textInput}
          placeholder = "E-mail"
          onChangeText = {(text)=>setEmail(text)}
        />
        
        <TextInput
          style = {styles.textInput}
          placeholder = "Senha"
          onChangeText = {(text)=>setPassword(text)}
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
