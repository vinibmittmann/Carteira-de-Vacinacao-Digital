import React, {createContext, useState} from 'react'
import config from '../../config/config.json'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userType, setUserType] = useState(null);

    const loginUser = async (email, password) => {
        let request = await fetch(config.url + 'login', {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              emailUser: email,
              passwordUser: password
            })
          })
        let res = await request.json();

        if (res) {
            setUserType('user');
        }
    }

    const loginWorker = async (email, password) => {
        let request = await fetch(config.url + 'loginWorker', {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              emailWorker: email,
              passwordWorker: password
            })
          })
        let res = await request.json();

        if (res) {
            setUserType('worker');
        }
    }

    const logout = () => {
        setUserType(null);
    }

    return (
        <AuthContext.Provider value={{loginUser, loginWorker, logout, userType}}>
            {children}
        </AuthContext.Provider>
    )
}