import React, {useContext} from 'react'
import MainScreen from '../pages/main'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import {AuthContext} from '../contexts/auth'

const UserStack = createDrawerNavigator()

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

const UserRoute: React.FC = () => (
    <UserStack.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <UserStack.Screen name="Carteira de Vacinação" component={MainScreen} options={{
            headerShown: true

        }}/>
    </UserStack.Navigator>
)

export default UserRoute
