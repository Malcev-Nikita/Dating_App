import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import global from '../styles/Global-style'
import front_style from '../styles/Front-style'
import logo_style from '../styles/Logo-style';
import button_style from '../styles/Button-style';

class Front extends React.Component {
  render() {
    return (
      <View style={global.container} >

        <View style={logo_style.logo_container} >

          <Image source={require('../image/img/logo.png')} style={logo_style.logo} />
          <Text style={logo_style.logo_text} >FELL IN FEELS</Text>

        </View>

        <View style={button_style.total_black_button_container}>

            <TouchableOpacity style={button_style.total_black_button}>
              <Text style={button_style.total_black_button_text} >Начать</Text>
              <Image source={require('../image/icon/up-right-arrow.png')} style={button_style.total_black_button_image} />
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