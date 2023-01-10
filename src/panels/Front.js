import { StatusBar } from 'expo-status-bar';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import global from '../styles/Global-style'
import front_style from '../styles/Front-style'


export default function Front() {
    return (
      <View style={global.container} >

        <View style={front_style.button_container}>

          <TouchableOpacity style={front_style.button} colors={['red', 'yellow', 'green' ]}>
            <Text>Войти</Text>
          </TouchableOpacity>

          <TouchableOpacity style={front_style.button}>
            <Text>Регистрация</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
}