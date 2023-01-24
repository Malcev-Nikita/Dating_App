import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Chats from './Chats';

import global from '../styles/Global-style';

const Tab = createBottomTabNavigator();

class Home extends React.Component {
 

  render() {
    return (
        <View style={global.container}>
            <Tab.Navigator style={{backgroundColor: 'yellow'}}>
                <Tab.Screen name="Chats" component={Chats} options={{headerShown: false}} />
            </Tab.Navigator>
        </View>
    );
  };
};

export default Home;