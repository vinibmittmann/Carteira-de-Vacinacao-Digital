import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './src/routes/index'
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font'
import {AuthProvider} from './src/contexts/auth'

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Andika-Regular': require('./assets/fonts/Andika-Regular.ttf')
  });

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync()
  }else{
    SplashScreen.hideAsync();
    return (
      <AuthProvider>
        <NavigationContainer>
           <Routes/>
        </NavigationContainer>
      </AuthProvider>
    );
  }


 
};
