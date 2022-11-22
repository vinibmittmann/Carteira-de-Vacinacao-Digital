import React, {createContext, useState} from 'react'
import config from '../../config/config.json'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userType, setUserType] = useState(null);
    const [username, setUsername] = useState(null);

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
        console.log(res);

        if (res.status == 1) {
          setUsername(res.name);
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
          setUsername(res.name);  
          setUserType('worker');
        }
    }

    const logout = () => {
      setUsername(null);
      setUserType(null);
    }

    return (
        <AuthContext.Provider value={{loginUser, loginWorker, logout, userType, username}}>
            {children}
        </AuthContext.Provider>
    )
}