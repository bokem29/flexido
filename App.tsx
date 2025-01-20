import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import AppNavigator from './AppNavigator';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
      const loadFonts = async () => {
          await Font.loadAsync({
              'figtree': require('./assets/fonts/Figtree-Regular.ttf'),
              'figtree-semibold': require('./assets/fonts/Figtree-SemiBold.ttf') ,
              'figtree-regular': require('./assets/fonts/Figtree-Regular.ttf')  // Adjust path if needed
          });
          setFontsLoaded(true);
      };

      loadFonts();
  }, []);

  if (!fontsLoaded) {
      return null; // Or you can show a loading indicator here
  }
  return <AppNavigator />;
}