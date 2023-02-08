import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { BoxShadow } from 'react-native-shadow'
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"

import global from '../styles/Global-style'
import front_style from '../styles/Front-style'
import button_style from '../styles/Button-style';

class Front extends React.Component {
  render() {
    const shadowOpt = {
      width:160,
      height:170,
      color:"#000",
      border:2,
      radius:3,
      opacity:0.2,
      x:0,
      y:3,
      style:{marginVertical:5}
    }

    return (
      <View style={global.container} >

        <View style={front_style.logo_container} >

        <Svg
            width={180}
            height={162}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G filter="url(#a)" fillRule="evenodd" clipRule="evenodd">
              <Path
                d="M82.966 28.553s6.669-7.612 16.892-12.026c6.492-2.802 14.637-3.918 22.731-2.261 7.142 1.46 14.714 6.645 21.61 15.265 7.528 9.41 8.564 18.732 8.23 27.688-.355 9.562-2.496 18.68-6.988 25.515-3.31 5.04-7.566 8.54-10.607 11.147a334.054 334.054 0 0 1-5.272 4.428L82.966 135V28.553Z"
                fill="url(#b)"
              />
              <Path
                d="M82.966 28.553s-6.669-7.612-16.893-12.026c-6.491-2.802-14.636-3.918-22.73-2.261-7.142 1.46-14.714 6.645-21.61 15.265-7.529 9.41-8.564 18.732-8.23 27.688.355 9.562 2.496 18.68 6.987 25.515 3.311 5.04 7.567 8.54 10.608 11.147a326.947 326.947 0 0 0 5.272 4.428L82.966 135V28.553Z"
                fill="url(#c)"
              />
            </G>
            <Defs>
              <LinearGradient
                id="b"
                x1={147.767}
                y1={29.274}
                x2={87.681}
                y2={119.215}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#F9CF79" />
                <Stop offset={0.471} stopColor="#E7B564" />
                <Stop offset={1} stopColor="#D59A4F" />
              </LinearGradient>
              <LinearGradient
                id="c"
                x1={11.537}
                y1={46.671}
                x2={84.877}
                y2={101.819}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#F3955F" />
                <Stop offset={0.49} stopColor="#D86B42" />
                <Stop offset={1} stopColor="#BD4025" />
              </LinearGradient>
            </Defs>
          </Svg>

          <Text style={front_style.logo_text} >FIFI</Text>

        </View>

        <View style={button_style.total_black_button_container}>

            <TouchableOpacity style={button_style.total_black_button} onPress={() => this.props.navigation.navigate('Register')}>
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