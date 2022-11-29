import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../pages/main'
import AddUserScreen from '../pages/addUser'

const WorkerStack = createNativeStackNavigator();

const WorkerRoute: React.FC = () => (
    <WorkerStack.Navigator>
        <WorkerStack.Screen name="main" component={MainScreen} options={{headerShown: false}}/>
        <WorkerStack.Screen name="addUser" component={AddUserScreen} options={{headerShown: false}}/>
    </WorkerStack.Navigator>
);

export default WorkerRoute;
