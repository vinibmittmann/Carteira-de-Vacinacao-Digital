import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [logged, setLogged] = useState(null)
    const [username, setUsername] = useState(null)

    useEffect(() => {
      const loadData = async () => {
        const logged = await AsyncStorage.getItem('LOGGED')
        const username = await AsyncStorage.getItem('USERNAME')
        
        if (logged) setLogged(logged)
        if (username) setUsername(username)
      }
      let load = loadData()
    })
    
    const login = async (email, password) => {
        let request = await fetch(config.url + 'loginWorker', {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
          })
        let res = await request.json();

        if (res.status == 'success') {
          setUsername(res.name)
          AsyncStorage.setItem('USERNAME', res.name)
          setLogged('true')
          AsyncStorage.setItem('LOGGED', 'true')
        }
    }

    const logout = () => {
      AsyncStorage.removeItem('USERNAME')
      AsyncStorage.removeItem('LOGGED')
      setUsername(null)
      setLogged(null)
    }

    return (
        <AuthContext.Provider value={{login, logout, username, logged}}>
            {children}
        </AuthContext.Provider>
    )
}