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

export default class App extends Component{
  render() {
    return (
      <View style={{backgroundColor : 'blue' , flex : 1}}>
        <Word />
      </View>
    );
  }
}


