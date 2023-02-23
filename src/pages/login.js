import React, {useState, useContext} from 'react'
import {View, TextInput, TouchableOpacity, Text} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {styles} from '../../styles'
import {AuthContext} from '../contexts/auth'


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {login, error} = useContext(AuthContext)

    return (
        <View style={styles.loginContainer}>
            <Text style={[styles.logo, {paddingTop: 165, paddingBottom: 50, textAlign: 'center'}]}>CARTEIRA DE VACINAÇÃO DIGITAL</Text>

            <Text style={styles.error}> {error} </Text>
            <TextInput
                style={styles.textInput}
                placeholder="CPF / e-mail"
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity
                onPress={null}
            >
                <Text style={[styles.link, {color: '#5042AB'}]}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, {backgroundColor: '#5042AB', width: '100%'}]}
                onPress={() => login(email, password)}
            >
                <Text style={styles.buttonTitle}>ENTRAR</Text>
            </TouchableOpacity>

            <StatusBar style="auto"/>
        </View>
    )
}
