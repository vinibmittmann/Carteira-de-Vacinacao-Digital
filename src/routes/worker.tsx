import React, {useContext} from 'react'
import MainScreen from '../pages/main'
import AddUserScreen from '../pages/addUser'
import VaccinateScreen from '../pages/vaccinate'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { styles } from '../../styles';
import {AuthContext} from '../contexts/auth'
import LoginScreen from '../pages/login';

const WorkerStack = createDrawerNavigator();

const WorkerRoute: React.FC = () => (
    <WorkerStack.Navigator>
        <WorkerStack.Screen name="Carteira de Vacinação" component={MainScreen} options={{
            headerShown: true

        }}/>
        <WorkerStack.Screen name="Adicionar Usuário" component={AddUserScreen} options={{
            headerShown: true,
            headerTitle: 'Novo Usuário',
            headerTitleStyle: {
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#7A6DCC"
            }
        }}/>
        <WorkerStack.Screen name="Aplicação de Vacina" component={VaccinateScreen} options={{
            headerShown: true,
            headerTitle: 'Aplicar Vacina',
            headerTitleStyle: {
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#7A6DCC"
            }
        }}/>

        <WorkerStack.Screen name="Sair" component={LoginScreen} options={{
            headerShown: false,
            headerTitle: 'Sair',
            headerTitleStyle: {
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#7A6DCC"
            }
        }}/>
    </WorkerStack.Navigator>
);

export default WorkerRoute;
