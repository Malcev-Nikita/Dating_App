import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import logo_style from '../styles/Logo-style';

class Logo extends Component {
    render() {
        return (
            <View style={logo_style.logo_container} >
                <Image source={require('../image/img/logo.png')} style={logo_style.logo} />
                <Text style={logo_style.logo_text} >FIFI</Text>
            </View>
        )
    }
}

export default Logo