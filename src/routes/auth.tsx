import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddUserScreen from '../pages/addUser';
import LoginScreen from '../pages/login'

const AuthStack = createNativeStackNavigator();

const AuthRoute: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>

        
        <AuthStack.Screen name="addUser" component={AddUserScreen} options={{
            headerShown: true,
            headerTitle: 'Adicionar Usuário',
            headerTitleStyle: {
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#7A6DCC"
            }
        }}/>
        

    </AuthStack.Navigator>
);

export default AuthRoute;
