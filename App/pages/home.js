
import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';
import { createTabNavigator  } from 'react-navigation';
import { px2dp, g_style} from './../components';
import LiveVideo from './home/liveVideo';
import Recommend from './home/recommend';
import Follow from './home/follow';

export default Home = createTabNavigator(
  {
    LiveVideo: {screen:LiveVideo, navigationOptions: {title: '直播'}},
    Recommend: {screen:Recommend, navigationOptions: {title: '推荐'}},
    Follow: {screen:Follow, navigationOptions: {title: '追番'}}
  },{
    tabBarOptions: {
      activeTintColor: g_style.mainColor,
      inactiveTintColor: g_style.black,
      labelStyle: {
        fontSize: px2dp(38),
        // height: "100%",
        paddingHorizontal: px2dp(20),
      },
      indicatorStyle : {
        // width: px2dp(108),
        // paddingHorizontal: px2dp(20),
        backgroundColor: g_style.mainColor,
      },
      style: {
        backgroundColor: "#fff",
      },
    }
  }
)

