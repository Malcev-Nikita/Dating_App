import 'react-native-gesture-handler';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import Front from './src/panels/Front'
import Login from './src/panels/Login'
import Register from './src/panels/Register'
import Home from './src/panels/Home';

const Stack = createStackNavigator();
const fonts = () => Font.loadAsync({
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Front" component={Front} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={(error)=> console.warn(error)} />
    );
  }
}