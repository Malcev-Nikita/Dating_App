import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { LinearGradient } from 'expo-linear-gradient';
import DropdownMenu from 'react-native-dropdown-menu';

import global from '../styles/Global-style'
import input_style from '../styles/Input-style';
import button_style from '../styles/Button-style';
import register_style from '../styles/Register-style';

import Logo from '../components/Logo';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secure: true,
            phone: '+7',
            password: '',
            gender: '',
            age: '',
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

        var data = [["Не выбран", "Мужской", "Женский"]];

        return (
            <KeyboardAwareScrollView contentContainerStyle={{height: Dimensions.get('screen').height}}>
                <LinearGradient colors={['#C7A0CB', '#A6CAE5']} style={global.container} start={[0, 0]} end={[1, 1]} locations={[0.1, 0.6]} >
                    <Logo />

                    <View style={input_style.input_global_container}>
                        <View style={input_style.input_container}>
                            <Text style={input_style.input_text}>Номер телефона</Text>
                            <TextInputMask style={input_style.input} type={'custom'} value={this.state.phone} keyboardType='numeric'
                                        options={{
                                            mask: '+7 (***) ***-**-**',
                                            withDDD: true,
                                            dddMask: '+7 (***) ***-**-**',
                                        }} 
                                        onChangeText = {text => {
                                                this.setState({
                                                    phone: text
                                                })
                                        } }
                            />
                        </View>

                        <View style={input_style.input_container}>
                            <Text style={input_style.input_text}>Имя Фамилия</Text>
                            <TextInput style={input_style.input} selectionColor={'#23232340'} />
                        </View>

                        <View style={input_style.input_container}>
                            <Text style={input_style.input_text}>Пароль</Text>
                            <TextInput  style={input_style.input} selectionColor={'#23232340'} secureTextEntry={this.state.secure} value={this.state.password}
                                        onChangeText = {text => {
                                                if (text.length <= 16) {
                                                    this.setState({
                                                        password: text
                                                    })
                                                }
                                            }} 
                            />
                            <TouchableOpacity style={input_style.password_container} onPress={this.show}>
                                {eye}
                            </TouchableOpacity>
                        </View>

                        <View style={register_style.inputs_container}>
                            <View style={input_style.dropdown_container}>
                                <Text style={input_style.dropdown_text}>Пол</Text>
                                <DropdownMenu   style={input_style.dropdown}
                                                activityTintColor={'green'}
                                                handler={(selection, row) => this.setState({text: data[selection][row]})}
                                                data={data}
                                                bgColor={'#00000000'}
                                />
                            </View>

                            <View style={input_style.age_container}>
                                <Text style={input_style.age_text}>Лет</Text>
                                <TextInput  style={input_style.age_input} selectionColor={'#23232340'} keyboardType='numeric' value={this.state.age}
                                            onChangeText = {text => {
                                                if (text.length <= 2) {
                                                    this.setState({
                                                        age: text
                                                    })
                                                }
                                            }} 
                                />
                            </View>
                        </View>
                    </View>

                    <View style={button_style.double_button_container}>
          
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Front')}>
                            <LinearGradient colors={['#F9CF79', '#E7B564', '#D59A4F']} style={button_style.double_button_small} start={[0, 0]} end={[1, 1]}>
                                <Image source={require('../image/icon/back.png')} style={button_style.double_button_image} />
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LinearGradient colors={['#F3955F', '#D86B42', '#BD4025']} style={button_style.double_button} start={[0, 0]} end={[1, 1]}>
                                <Text style={button_style.double_button_text}>Регистрация</Text>
                                <Image source={require('../image/icon/enter.png')} style={button_style.double_button_image}/>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                </LinearGradient>
            </KeyboardAwareScrollView>
        );
    };
};
  

export default Register;