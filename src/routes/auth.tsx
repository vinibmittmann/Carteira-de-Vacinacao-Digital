import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../pages/login';

const AuthStack = createNativeStackNavigator();

const AuthRoute: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
);

export default AuthRoute;
