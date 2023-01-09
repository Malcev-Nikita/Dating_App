import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

import global from '../styles/Global-style'
import front_style from '../styles/Front-style'


export default function Front() {
    return (
      <View style={global.container} >

        <View style={front_style.button_container}>

          <Button title='Войти' style={front_style.button} />
          <Button title='Регистрация' style={front_style.button} />

        </View>

      </View>
    );
}