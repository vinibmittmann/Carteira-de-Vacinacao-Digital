import React, {useContext} from 'react'
import AuthRoute from './auth'
import UserRoute from './user'
import {AuthContext} from '../contexts/auth'

const Routes: React.FC = () => {
    const {logged} = useContext(AuthContext);

    if (logged == 'true') {
        return <UserRoute/>
    }

    return <AuthRoute/>
};

export default Routes;
