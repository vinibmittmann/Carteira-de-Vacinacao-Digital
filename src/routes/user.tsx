import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserMainScreen from '../pages/userMain'

const UserStack = createNativeStackNavigator();

const UserRoute: React.FC = () => (
    <UserStack.Navigator>
        <UserStack.Screen name="userMain" component={UserMainScreen} options={{headerShown: false}}/>
    </UserStack.Navigator>
);

export default UserRoute;
