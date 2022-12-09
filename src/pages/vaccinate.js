import React, {useState, useContext} from 'react'
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {styles} from '../../styles'
import {AuthContext} from '../contexts/auth'
import config from '../../config/config.json'


export default function LoginScreen() {
    const [vaccineSearch, setVaccineSearch] = useState(null)
    const {token} = useContext(AuthContext);

    const getVaccines = async () => {
        let request = await fetch(config.url + 'getVaccines', {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({token: token, name: vaccineSearch})
        })
        let res = await request.json()
        console.log(res)
    }

    return (
        <View style={styles.container}>


            <TextInput
                style={styles.textInput}
                placeholder="Vacina"
                onChangeText={(text) => setVaccineSearch(text)}
            />

            <TouchableOpacity
                style={[styles.button, {backgroundColor: '#000000'}]}
                onPress={() => getVaccines()}
            >
                <Text style={styles.buttonTitle}>ENTRAR</Text>
            </TouchableOpacity>

            <StatusBar style="auto"/>
        </View>
    );
};
