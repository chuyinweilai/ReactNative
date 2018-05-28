import React,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import px2dp from './px2dp';
import g_style from './styles';

export default class Slider extends Component{
  render(){
    return (
      <View >
        <View style={styles.header}>
          <View style={styles.headerT}>
            <View style={styles.face}></View>
            <View style={styles.iconPart}>
              <Text style={styles.icon}>&#xe673;</Text>
              <Text style={styles.icon}>&#xe612;</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>活在初音的未来</Text>
            <Text>LV4</Text>
            <Text>年度大会员</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>B币：5.0</Text>
            <Text>硬币：324.7</Text>
          </View>
        </View>
        <View></View>
        <View></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
  },
  header:{
    height: px2dp(480),
    paddingLeft: px2dp(54),
    backgroundColor: g_style.mainColor,
  },
  headerT:{
    height: px2dp(308),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: px2dp(58)
  },
  iconPart:{
    flexDirection: 'row'
  },
  icon:{
    height: px2dp(90),
    width: px2dp(90),
    lineHeight: px2dp(90),
    fontFamily: 'iconfont',
    fontSize: px2dp(50),
    color: "white",
    textAlign: 'center',
    borderWidth: px2dp(4),
    borderColor: 'white',
    borderRadius: 50,
    marginRight: px2dp(46),
  },
})