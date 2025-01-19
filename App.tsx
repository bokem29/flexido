import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'; 

export default function App() {
  const [fontsLoaded] = useFonts({
    'jakarta-regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    'jakarta-medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
    'jakarta-semibold': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'jakarta-bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'jakarta-extrabold': require('./assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'jakarta-light': require('./assets/fonts/PlusJakartaSans-Light.ttf'),
    'jakarta-italic': require('./assets/fonts/PlusJakartaSans-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />; 
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'jakarta-regular'
  }
});
