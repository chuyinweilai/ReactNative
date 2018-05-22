
import React from 'react';
import { StackNavigator  } from 'react-navigation';

import Home from './../pages/home';
import Login from './../pages/Login';

export default RootStack = StackNavigator(
  {
    Login: Login,
    Home: Home
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
)
