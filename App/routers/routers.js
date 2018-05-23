
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator  } from 'react-navigation';
import { px2dp, g_style } from './../components'
import {
  Login,
  Home,
  Trends,
  Partition,
  Purchase
} from './../pages/list';

const styles = StyleSheet.create({
  tabs:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39c5bb'
  },
  selectTabs:{
    color: "pink"
  },
  icon: {
    fontSize: px2dp(60),
  },
  tabText:{
    fontSize: px2dp(26),
    textAlign: 'center',
  }
})

const Contant = createBottomTabNavigator(
  {
    Home: {
      "screen": Home,
      "navigationOptions": {
        "title": '首页',
        "tabBarIcon": ({focused})=>
          focused?
          <Text style={[styles.icon, {fontFamily:'iconfont', color: g_style.mainColor}]}>&#xe68c;</Text>:
          <Text style={[styles.icon, {fontFamily:'iconfont', color: g_style.black }]}>&#xe625;</Text>
      }
    },
    Trends: {
      "screen": Trends,
      "navigationOptions": {
        "title": '分区',
        "tabBarIcon": ({focused})=>
          focused?
          <Text style={[styles.icon, {fontFamily:'iconfont', color: g_style.mainColor}]}>&#xe631;</Text>:
          <Text style={[styles.icon, {fontFamily:'iconfont', color: g_style.black }]}>&#xe632;</Text>
      }
    },
    Partition: {
      "screen": Partition,
      "navigationOptions": {
        "title": '动态',
        "tabBarIcon": ({focused})=>
          focused?
          <Text style={[styles.icon, {fontFamily:'iconfont', color: g_style.mainColor}]}>&#xe8e6;</Text>:
          <Text style={[styles.icon, {fontFamily:'iconfont', color: g_style.black }]}>&#xe6a8;</Text>
      }
    },
    Purchase: {
      "screen": Purchase,
      "navigationOptions": {
        "title": '会员购',
        "tabBarIcon": ({focused})=>
          focused?
          <Text style={[styles.icon, {fontFamily:'iconfont', color: g_style.mainColor}]}>&#xe619;</Text>:
          <Text style={[styles.icon, {fontFamily:'iconfont', color: g_style.black }]}>&#xe638;</Text>
      }
    },
  },
  {
    headerMode: 'none',
    initRouteName: 'Home',
    lazyLoad: true,
    tabBarOptions: {
      activeTintColor: g_style.mainColor,
      style: {
        padding: 0,
        margin: 0
      }
    }
  }
);

export default RootStack = createStackNavigator(
  {
    Login: Login,
    Contant: Contant,
  },
  {
    headerMode: 'none',
    initialRouteName : 'Contant'
  }
)