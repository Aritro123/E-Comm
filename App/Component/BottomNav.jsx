/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */

import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import {NavigationContainer} from '@react-navigation/native';
import Feather from '@react-native-vector-icons/feather';

export default class BottomNav extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Products" component={Products} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
