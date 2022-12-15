import React, {useContext} from 'react'
import AuthRoute from './auth'
import WorkerRoute from './worker'
import {AuthContext} from '../contexts/auth'

const Routes: React.FC = () => {
    const {logged} = useContext(AuthContext);

    if (logged) {
        return <WorkerRoute/>
    }

    return <AuthRoute/>
    
};

export default Routes;
