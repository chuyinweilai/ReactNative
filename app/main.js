/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './redux/reducers/reducers';
import {
  View,
  Text
} from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import {RootStack} from './routers/routers';

import { createStackNavigator } from 'react-navigation';
let store = createStore(todoApp)

export default class Main extends Component{
  
  componentWillMount(){
    console.log(RootStack)
    SplashScreen.hide();
  }

  render() {
    // return (
    //   <Provider store={store}>
    //     <RootStack />
    //   </Provider>
    // );
    return (
      <RootStack />
    );
  }
}
