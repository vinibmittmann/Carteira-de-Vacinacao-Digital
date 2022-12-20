import React, {useContext, Component} from 'react'
import Home from '../pages/Home'
import AddUserScreen from '../pages/addUser'
import VaccinateScreen from '../pages/vaccinate'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {AuthContext} from '../contexts/auth'

const EmployeeStack = createDrawerNavigator()

function CustomDrawerContent(props) {
    // @ts-ignore
    const {logout} = useContext(AuthContext)
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={() => logout()} />
        </DrawerContentScrollView>
    )
}

const EmployeeRoute: React.FC = () => (
    <EmployeeStack.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <EmployeeStack.Screen name="Carteira de Vacinação" component={Home} options={{
            headerShown: true

        }}/>
        <EmployeeStack.Screen name="Adicionar Usuário" component={AddUserScreen} options={{
            headerShown: true,
            headerTitle: 'Novo Usuário',
            headerTitleStyle: {
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#7A6DCC"
            }
        }}/>
        <EmployeeStack.Screen name="Aplicação de Vacina" component={VaccinateScreen} options={{
            headerShown: true,
            headerTitle: 'Aplicar Vacina',
            headerTitleStyle: {
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#7A6DCC"
            }
        }}/>
    </EmployeeStack.Navigator>
)

export default EmployeeRoute
