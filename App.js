import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes/index'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Andika-Regular': require('./assets/fonts/Andika-Regular.ttf')
  });

  if (!fontsLoaded) return <AppLoading/>

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
};
