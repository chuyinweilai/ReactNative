
import React,{ Component } from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';
import { createTabNavigator, createStackNavigator  } from 'react-navigation';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import { ToolHead, px2dp, g_style} from './../components';
import LiveVideo from './home/liveVideo';
import Recommend from './home/recommend';
import Follow from './home/follow';
import Searchs from './Searchs';

const Cont = createTabNavigator(
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
        paddingHorizontal: px2dp(20),
      },
      indicatorStyle : {
        backgroundColor: g_style.mainColor,
      },
      style: {
        backgroundColor: "#fff",
      },
    }
  }
)

class Main extends Component{
  render(){
    return (
      <View style={{flex: 1}}>
        <ToolHead navigation={this.props.navigation}></ToolHead>
        <View style={{flex: 1}}>
          <Cont></Cont>
        </View>
      </View>
    )
  }
}

export default Home = createStackNavigator(
  {
    Main: Main,
    Searchs: Searchs,
  },
  {
    headerMode: "none",
    initialRouteName : 'Main',
    // screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    // transitionSpec: {
    //   duration: 250,
    //   easing: Easing.bounce,
    //   timing: Animated.timing,
    // },
  }
)

