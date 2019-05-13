/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Word from './components/Word';
import Myimage from './components/Myimage';

export default class App extends Component{
  render() {
    return (
      <View style={{ flex : 1}}>
        <Myimage />
      </View>
    );
  }
}


