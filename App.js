/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Word from './components/Word';
import Myimage from './components/Myimage';
import MyFlatlist from './components/MyFlatlist';

import {ScreenA , ScreenB} from './components/UseStateHooks';

export default class App extends Component{
  render() {
    return (
      <SafeAreaView style={{ flex : 1 , justifyContent : 'center' , alignSelf : 'center'}}>
        <ScreenA />
        <ScreenB />
      </SafeAreaView>
    );
  }
}


