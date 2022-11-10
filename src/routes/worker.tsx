import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WorkerMainScreen from '../pages/workerMain'

const WorkerStack = createNativeStackNavigator();

const WorkerRoute: React.FC = () => (
    <WorkerStack.Navigator>
        <WorkerStack.Screen name="workerMain" component={WorkerMainScreen} options={{headerShown: false}}/>
    </WorkerStack.Navigator>
);

export default WorkerRoute;
