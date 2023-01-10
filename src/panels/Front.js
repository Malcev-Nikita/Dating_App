import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import global from '../styles/Global-style'
import front_style from '../styles/Front-style'

class Front extends React.Component {
  render() {
    return (
      <View style={global.container} >

        <View style={front_style.logo_container} >

          <Image source={require('../image/img/logo.png')} style={front_style.logo} />
          <Text style={front_style.logo_text} >FELL IN FEELS</Text>

        </View>

        <View style={front_style.button_container}>

            <TouchableOpacity style={front_style.button}>
              <Text style={front_style.button_text} >Начать</Text>
              <Image source={require('../image/icon/up-right-arrow.png')} style={front_style.button_image} />
            </TouchableOpacity>

        </View>

        <View style={front_style.login_container} >

          <Text style={front_style.login_text} >Уже есть в системе</Text>

          <TouchableOpacity style={front_style.login_button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={front_style.login_button_text} >Войти</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  };
};

export default Front;