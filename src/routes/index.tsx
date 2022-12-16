import React, {useContext} from 'react'
import AuthRoute from './auth'
import EmployeeRoute from './employee'
import UserRoute from './user'
import {AuthContext} from '../contexts/auth'

const Routes: React.FC = () => {
    // @ts-ignore
    const {type} = useContext(AuthContext)

    if (type === '1') {
        return <EmployeeRoute/>
    } else if (type === '0') {
        return <UserRoute/>
    }
    return <AuthRoute/>
}

export default Routes
