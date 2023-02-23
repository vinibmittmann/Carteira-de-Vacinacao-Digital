import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm, Controller} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { styles } from '../../styles'
import config from '../../config/config.json'
import {AuthContext} from '../contexts/auth'

const schema = yup.object({
  name: yup.string().required("Informe seu nome"),
  cpf: yup.string().min(9, "Digite um CPF válido").required("Informe seu CPF"),
  email: yup.string().email("E-mail Inválido").required("Informe seu E-mail"),
  birth: yup.string().required("Informe sua data de nascimento"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("Informe sua senha"),
  password2: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("Informe sua senha")

})

export default function AddUserScreen({ navigation }) {
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })
  const {token} = useContext(AuthContext)

  async function registerUser(data) {
   
    if (data.password === data.password2) {

      let request = await fetch(config.url + 'register', {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          token: token,
          name: data.name,
          cpf: data.cpf,
          email: data.email,
          password: data.password,
          birth: new Date(data.birth)
        })
      })
    }
  }
  
  return (
    
    <View>
      <ScrollView style={{padding:50}}>
        
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value} }) => (
            <TextInput
              style={styles.textInput}
              placeholder = "Nome"
              onChangeText = {onChange}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={styles.labelError}>{errors.name?.message}</Text>}

        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, value} }) => (
            <TextInput
              style={styles.textInput}
              placeholder = "CPF"
              onChangeText = {onChange}
              value={value}
            />
          )}
        />
        {errors.cpf && <Text style={styles.labelError}>{errors.cpf?.message}</Text>}
        
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value} }) => (
            <TextInput
              style={styles.textInput}
              placeholder = "E-mail"
              onChangeText = {onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

        <Controller
          control={control}
          name="birth"
          render={({ field: { onChange, value} }) => (
            <TextInput
              style={styles.textInput}
              placeholder = "Data de nascimento"
              onChangeText = {onChange}
              value={value}
            />
          )}
        />
        {errors.birth && <Text style={styles.labelError}>{errors.birth?.message}</Text>}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value} }) => (
            <TextInput
              style={styles.textInput}
              placeholder = "Senha"
              onChangeText = {onChange}
              secureTextEntry = {true}
              value={value}
            />
          )}
        /> 
        {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
          
        <Controller
          control={control}
          name="password2"
          render={({ field: { onChange, value} }) => (
            <TextInput
              style={styles.textInput}
              placeholder = "Confirme sua senha"
              onChangeText = {onChange}
              secureTextEntry = {true}
              value={value}
            />
          )}
        /> 
        {errors.password2 && <Text style={styles.labelError}>{errors.password2?.message}</Text>}

        <TouchableOpacity
          style={[styles.buttonPaciente, {backgroundColor: '#5042AB', width: '100%'}]}
          onPress = {handleSubmit(registerUser)}
          >
            <Text style = {styles.buttonTitle}>Confirmar Cadastro</Text>
          </TouchableOpacity>
          
        <StatusBar style="auto" />

      </ScrollView>
    </View>
  );
};
