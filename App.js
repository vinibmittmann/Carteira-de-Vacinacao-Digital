import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './pages/Login/login'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./Fontes/Inter-Bold.ttf'),
    'Andika-Regular': require('./Fontes/Andika-Regular.ttf')
  });

  if (!fontsLoaded) return <AppLoading/>

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
