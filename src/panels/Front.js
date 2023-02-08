import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import global from '../styles/Global-style'
import front_style from '../styles/Front-style'
import button_style from '../styles/Button-style';

class Front extends React.Component {
  render() {
    return (
      <LinearGradient colors={['#C7A0CB', '#A6CAE5']} style={global.container} start={[0, 0]} end={[1, 1]} locations={[0.1, 0.6]} >

        <View style={front_style.logo_container} >

          <View style={front_style.logo_text_container}>
            <Image source={require('../image/img/logo.png')} style={front_style.logo} />
            <Text style={front_style.logo_text} >FIFI</Text>
          </View>

          <Text style={front_style.logo_description} >Единственное кросплатформенное приложение для знакомств в России</Text>

        </View>

        <View style={button_style.double_button_container}>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <LinearGradient colors={['#F3955F', '#D86B42', '#BD4025']} style={button_style.double_button} start={[0, 0]} end={[1, 1]}>
              <Text style={button_style.double_button_text}>Регистрация</Text>
              <Image source={require('../image/icon/add-user.png')} style={button_style.double_button_image}/>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <LinearGradient colors={['#F9CF79', '#E7B564', '#D59A4F']} style={button_style.double_button_small} start={[0, 0]} end={[1, 1]}>
              
              <Image source={require('../image/icon/enter.png')} style={button_style.double_button_image} />

            </LinearGradient>
          </TouchableOpacity>

        </View>

      </LinearGradient>
    );
  };
};

export default Front;