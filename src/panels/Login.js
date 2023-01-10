import React from 'react';
import { Text, View } from 'react-native';

import global from '../styles/Global-style'

class Login extends React.Component {
    render() {
      return (
            <View style={global.container} >
                <Text onPress={() => this.props.navigation.navigate('Front')} >Привет</Text>
            </View>
        );
    }
}
  
export default Login;