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
        visable: 0,
    };

    this.closeError = this.closeError.bind(this); 
  }

  closeError () {
    this.setState({
        visable: 1,
        text: ''
    });
  }

  render() {
    if (this.props.Visable && this.state.visable < 1)
    {
      return (
        <View style={error_style.error_opacity} >
            <View style={error_style.error_container}>

              <TouchableOpacity style={error_style.error_close} onPress={this.closeError}>
                  <Image source={require('../image/icon/close.png')} style={{width: 35, height: 35}} />
              </TouchableOpacity>

              <Text style={error_style.error_text}>
                {this.state.text}
              </Text>

            </View>
        </View>
     );
    }
  };
};

Error.propTypes = {
    CodeError: PropTypes.string,
    Visable: PropTypes.bool,
}

export default Error;