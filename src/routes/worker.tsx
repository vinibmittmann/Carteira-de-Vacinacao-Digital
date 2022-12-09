import React from 'react'
import MainScreen from '../pages/main'
import AddUserScreen from '../pages/addUser'
import VaccinateScreen from '../pages/vaccinate'
import { createDrawerNavigator } from '@react-navigation/drawer';

const WorkerStack = createDrawerNavigator();

const WorkerRoute: React.FC = () => (
    <WorkerStack.Navigator>
        <WorkerStack.Screen name="main" component={MainScreen} options={{
            headerShown: true
        }}/>
        <WorkerStack.Screen name="addUser" component={AddUserScreen} options={{
            headerShown: true,
            headerTitle: 'Aplicar Vacina',
            headerTitleStyle: {
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#7A6DCC"
            }
        }}/>
        <WorkerStack.Screen name="vaccinate" component={VaccinateScreen} options={{
            headerShown: true,
            headerTitle: 'Aplicar Vacina',
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
