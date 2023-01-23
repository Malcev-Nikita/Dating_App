import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import ERRORCODE from '../config'

import error_style from '../styles/Error-style';


class Error extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
        text: '',
        visable: false,
    };

    this.callError = this.callError.bind(this); 
  }

  callError () {
    const codeError = this.props.CodeError

    this.setState({
        visable: true,
        text: ERRORCODE.code
    });
  }

  closeError () {
    this.setState({
        visable: false,
        text: ''
    });
  }

  render() {
    return (
        <View style={error_style.error_container}>
            <TouchableOpacity>
                <Image source={require('../image/icon/close.png')} />
            </TouchableOpacity>

            <Text>{this.state.text}</Text>
        </View>
    );
  };
};

Error.propTypes = {
    CodeError: PropTypes.string,
}

export default Error;