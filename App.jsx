/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import Nav from './App/Component/Nav';
import Home from './App/Pages/Home';
import BottomNav from './App/Component/BottomNav';

export default class App extends Component {
  render() {
    return (
      <>

        {/* <Home /> */}
        <BottomNav/>
      </>
    )
  }
}

const styles = StyleSheet.create({})
