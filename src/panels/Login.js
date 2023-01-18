import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native-gesture-handler';

import global from '../styles/Global-style'
import logo_style from '../styles/Logo-style';
import input_style from '../styles/Input-style';
import button_style from '../styles/Button-style';

class Login extends React.Component {
    render() {
      return (
        // <View style={global.input_container}>
            <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false} contentContainerStyle={global.input_container}>
                <View style={logo_style.logo_container} >

                    <Image source={require('../image/img/logo.png')} style={logo_style.logo} />
                    <Text style={logo_style.logo_text} >FELL IN FEELS</Text>

                </View>

                <View style={input_style.input_global_container}>
                    <View style={input_style.input_container}>
                        <Text style={input_style.input_text}>Номер телефона</Text>
                        <TextInput style={input_style.input} selectionColor={'#23232340'} ref/>
                    </View>

                    <View style={input_style.input_container}>
                        <Text style={input_style.input_text}>Пароль</Text>
                        <TextInput style={input_style.input} selectionColor={'#23232340'} ref='searchInput' />
                        
                    </View>
                </View>

                <View style={button_style.total_black_button_container}>

                    <TouchableOpacity style={button_style.total_grey_button} onPress={() => this.props.navigation.navigate('Front')}>
                        <Image source={require('../image/icon/free-icon-back.png')} style={button_style.total_black_button_image} />
                    </TouchableOpacity>

                    <TouchableOpacity style={button_style.total_black_button}>
                        <Text style={button_style.total_black_button_text} >Войти</Text>
                        <Image source={require('../image/icon/enter.png')} style={button_style.total_black_button_image} />
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
            // </View>
        );
    }
}
  
export default Login;