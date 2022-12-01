import React, {createContext, useState, useEffect} from 'react'
import config from '../../config/config.json'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [logged, setLogged] = useState(null);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
      const loadData = async () => {
        const logged = await AsyncStorage.getItem('LOGGED')
        const username = await AsyncStorage.getItem('USERNAME')
        const token = await AsyncStorage.getItem('TOKEN')
        
        if (username) setUsername(username)
        if (token) setToken(token)
        if (logged) setLogged(logged)
      }
      let load = loadData()
    })

    const login = async (email, password) => {
        let request = await fetch(config.url + 'login', {
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
        console.log(res);

        if (res.status == 'success') {
          setUsername(res.name)
          await AsyncStorage.setItem('USERNAME', res.name)
          setToken(res.token)
          await AsyncStorage.setItem('TOKEN', token)
          setLogged('true')
          await AsyncStorage.setItem('LOGGED', 'true')
        }
    }

    const logout = async () => {
      await AsyncStorage.removeItem('USERNAME')
      await AsyncStorage.removeItem('LOGGED')
      await AsyncStorage.removeItem('TOKEN')
      setToken(null)
      setUsername(null)
      setLogged(null)
    }

    return (
        <AuthContext.Provider value={{login, logout, logged, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}