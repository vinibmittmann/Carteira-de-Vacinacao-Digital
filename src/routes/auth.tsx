import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/login'
import CadastroPacienteScreen from '../pages/CadastroPaciente';

const AuthStack = createNativeStackNavigator();

const AuthRoute: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <AuthStack.Screen name="SignUp" component={CadastroPacienteScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
);

export default AuthRoute;
