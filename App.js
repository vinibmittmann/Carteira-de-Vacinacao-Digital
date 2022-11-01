import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes/index'
// import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'

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
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    );
  }


 
};
