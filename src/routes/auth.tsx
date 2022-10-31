import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/userLogin'
import LoginWorker from '../pages/workerLogin'
import CadastroPacienteScreen from '../pages/userSignUp';
import CadastroProfissionalScreen from '../pages/workerSignUp';

const AuthStack = createNativeStackNavigator();

const AuthRoute: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <AuthStack.Screen name="SignUp" component={CadastroPacienteScreen} options={{
            title: 'Novo Usuário',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: "#153586",
            },
            headerTintColor: "#fff",
            headerBackVisible: false,
            headerTitleStyle: {
                fontSize: 19
            }
            }}/>
        <AuthStack.Screen name="SignUpWorker" component={CadastroProfissionalScreen} options={{
            title: 'Novo Profissional',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: "#153586",
            },
            headerTintColor: "#fff",
            headerBackVisible: false,
            headerTitleStyle: {
                fontSize: 19
            }
            }}/>
        <AuthStack.Screen name="LoginWorker" component={LoginWorker} options={{headerShown: false}}/>
    </AuthStack.Navigator>
);

export default AuthRoute;
