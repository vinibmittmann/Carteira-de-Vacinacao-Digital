import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json'


export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [type, setType] = useState(null)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const type = await AsyncStorage.getItem('TYPE')
            const username = await AsyncStorage.getItem('USERNAME')
            const token = await AsyncStorage.getItem('TOKEN')

            if (username) setUsername(username)
            if (token) setToken(token)
            if (type) setType(type)
        }
        let load = loadData()
    })

    const login = async (email, password) => {
        let request = await fetch(config.url + 'login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        })
        let res = await request.json()

        if (res.status === 'success') {
            setError(null)
            setUsername(res.name)
            await AsyncStorage.setItem('USERNAME', res.name)
            setToken(res.token)
            await AsyncStorage.setItem('TOKEN', res.token)
            setType(res.type)
            await AsyncStorage.setItem('TYPE', res.type)
        } else if (res.status === 'fail') {
            setError(res.message)
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem('USERNAME')
        await AsyncStorage.removeItem('TYPE')
        await AsyncStorage.removeItem('TOKEN')
        setToken(null)
        setUsername(null)
        setType(null)
    }

    return (
        <AuthContext.Provider value={{login, logout, username, type, token, error}}>
            {children}
        </AuthContext.Provider>
    )
}
