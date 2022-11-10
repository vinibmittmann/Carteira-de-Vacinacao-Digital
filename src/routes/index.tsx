import React, {useContext} from 'react'
import AuthRoute from './auth'
import UserRoute from './user'
import WorkerRoute from './worker'
import {AuthContext} from '../contexts/auth'

const Routes: React.FC = () => {
    const {userType} = useContext(AuthContext);

    if (userType == 'user') {
        return <UserRoute/>
    } else if (userType == 'worker') {
        return <WorkerRoute/>
    }

    return <AuthRoute/>
};

export default Routes;
