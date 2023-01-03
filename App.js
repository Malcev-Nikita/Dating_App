import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import global from './src/styles/Global-style'

export default function App() {
  return (
    <View style={global.container} >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}