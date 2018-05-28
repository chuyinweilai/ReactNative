/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoAdd from './redux/reducers/reducers';
import {
  View,
  Text,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import RootStack from './routers/routers';
import Index from './pages';
import { createStackNavigator } from 'react-navigation';

let store = createStore(todoAdd);

export default class Main extends Component{
  
  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
