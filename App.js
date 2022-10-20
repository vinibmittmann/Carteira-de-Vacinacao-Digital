import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/Login/login'
import CadastroPacienteScreen from './pages/CadastroPaciente/index'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./Fontes/Inter-Bold.ttf'),
    'Andika-Regular': require('./Fontes/Andika-Regular.ttf')
  });

  if (!fontsLoaded) return <AppLoading/>

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Cadastro Paciente"
          component={CadastroPacienteScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
