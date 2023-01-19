import React, {Component, useState} from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native-gesture-handler';

import global from '../styles/Global-style'
import logo_style from '../styles/Logo-style';
import input_style from '../styles/Input-style';
import button_style from '../styles/Button-style';
import register_style from '../styles/Register-style';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secure: true,
        };

        this.show = this.show.bind(this); 
    }

    show() {
        this.setState({
            secure: !this.state.secure,
        });
    }

    render() {
        let eye;

        if (this.state.secure) eye = <Image source={require('../image/icon/free-icon-open-eye.png')} style={input_style.password_icon} />

        else  eye = <Image source={require('../image/icon/free-icon-eye.png')} style={input_style.password_icon} />

        return (
            <KeyboardAwareScrollView contentContainerStyle={{height: Dimensions.get('screen').height}}>
                <View style={global.input_container}>
                    <View style={logo_style.logo_container} >
                        <Image source={require('../image/img/logo.png')} style={logo_style.logo} />
                        <Text style={logo_style.logo_text} >FELL IN FEELS</Text>
                    </View>

                    <View style={input_style.input_global_container}>
                        <View style={input_style.input_container}>
                            <Text style={input_style.input_text}>Номер телефона</Text>
                            <TextInput style={input_style.input} selectionColor={'#23232340'} />
                        </View>

                        <View style={input_style.input_container}>
                            <Text style={input_style.input_text}>Имя Фамилия</Text>
                            <TextInput style={input_style.input} selectionColor={'#23232340'} />
                        </View>

                        <View style={input_style.input_container}>
                            <Text style={input_style.input_text}>Пароль</Text>
                            <TextInput style={input_style.input} selectionColor={'#23232340'} secureTextEntry={this.state.secure} />
                            <TouchableOpacity style={input_style.password_container} onPress={this.show}>
                                {eye}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={button_style.total_black_button_container}>
                        <TouchableOpacity style={button_style.total_grey_button} onPress={() => this.props.navigation.navigate('Front')}>
                            <Image source={require('../image/icon/free-icon-back.png')} style={button_style.total_black_button_image} />
                        </TouchableOpacity>

                        <TouchableOpacity style={register_style.total_black_button_reg}>
                            <Text style={register_style.total_black_button_reg_text} >Регистрация</Text>
                            <Image source={require('../image/icon/enter.png')} style={button_style.total_black_button_image} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    };
};
  
export default Register;