import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import Routes from './src/routes';
import { 
  Inter_400Regular 
} from '@expo-google-fonts/inter';
import { 
  useFonts,
  Montserrat_500Medium, 
  Montserrat_600SemiBold 
} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return console.log('As fontes ainda estão carregando...');
  } else {
    // Ocultar a tela de splash quando as fontes estiverem carregadas
    SplashScreen.hideAsync(); 
    console.log('As fontes ja foram completamente carragadas !!!');
  }

  return (
    <>
      <Routes/>
      <StatusBar barStyle='default' />
    </>
  );
}
