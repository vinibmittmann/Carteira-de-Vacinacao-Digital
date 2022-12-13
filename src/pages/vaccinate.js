import React, {useState, useContext} from 'react'
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {styles} from '../../styles'
import {AuthContext} from '../contexts/auth'
import config from '../../config/config.json'
import DropDownPicker from 'react-native-dropdown-picker'


export default function LoginScreen() {
    const {token} = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [vaccines, setVaccines] = useState([])
    const [vaccine, setVaccine] = useState(null)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const getVaccines = async () => {
        let request = await fetch(config.url + 'getVaccines', {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({token: token})
        })
        let res = await request.json()
        setVaccines(res)
    }

    const getVaccine = async (value) => {
        let request = await fetch(config.url + 'getVaccine', {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({token: token, id: value})
        })
        let res = await request.json()
        setVaccine(res)
    }

    const getUser = async (cpf) => {
        if (cpf.length === 11) {
            let request = await fetch(config.url + 'getUserByCPF', {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({token: token, cpf: cpf})
            })
            let res = await request.json()
            if (res.status === 'fail') {
                setUser(null)
                setError(res.message)
            }
            else {
                setUser(res)
                setError(null)
            }
        }
    }

    const applyVaccine = async() => {
        let request = await fetch(config.url + 'applyVaccine', {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({token: token, userID: user.id, vaccineID: vaccine.id})
        })
    }

    return (
        <View style={styles.container}>

            <DropDownPicker
                placeholder="Selecione uma vacina"
                searchable={true}
                open={open}
                value={value}
                items={vaccines}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setVaccines}
                onPress={() => getVaccines()}
                onChangeValue={(value) => {getVaccine(value)}}
            />

            <Text>{vaccine === null ? '' : vaccine.name}</Text>
            <Text>{vaccine === null ? '' : vaccine.manufacturer}</Text>
            <Text>{vaccine === null ? '' : vaccine.dosage}</Text>

            <TextInput
                style={styles.textInput}
                placeholder="CPF"
                onChangeText={(text) => getUser(text)}
            />

            <Text style={styles.error}>{error}</Text>
            <Text>{user === null ? '' : user.name}</Text>

            <TouchableOpacity
                style={[styles.button, {backgroundColor: '#000000'}]}
                onPress={() => applyVaccine()}
            >
                <Text style={styles.buttonTitle}>CONFIRMAR</Text>
            </TouchableOpacity>

            <StatusBar style="auto"/>
        </View>
    );
};
