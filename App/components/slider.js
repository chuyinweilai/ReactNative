import React,{ Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

import px2dp from './px2dp';
import g_style from './styles';

export default class Slider extends Component{
  render(){
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.header}>
            <View style={styles.headerT}>
              <View style={styles.face}></View>
              <View style={styles.iconPart}>
                <Text style={styles.icon}>&#xe673;</Text>
                <Text style={styles.icon}>&#xe612;</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.user_name}>活在初音的未来</Text>
              <Text style={styles.user_lvl}>LV4</Text>
              <Text style={styles.user_status}>年度大会员</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.user_coin}>B币：5.0</Text>
              <Text style={styles.user_coin}>硬币：324.7</Text>
            </View>
          </View>
          <View style={styles.user_about}>
            <View>
              <Text style={styles.user_about_text_1}>1</Text>
              <Text style={styles.user_about_text_2}>动态</Text>
            </View>
            <View>
              <Text style={styles.user_about_text_1}>60</Text>
              <Text style={styles.user_about_text_2}>关注</Text>
            </View>
            <View>
              <Text style={styles.user_about_text_1}>17</Text>
              <Text style={styles.user_about_text_2}>粉丝</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.list}>侧边栏1</Text>
            <Text style={styles.list}>侧边栏2</Text>
            <Text style={styles.list}>侧边栏3</Text>
            <Text style={styles.list}>侧边栏4</Text>
            <Text style={styles.list}>侧边栏5</Text>
            <Text style={styles.list}>侧边栏6</Text>
            <Text style={styles.list}>侧边栏7</Text>
            <Text style={styles.list}>侧边栏8</Text>
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <View>
            <Text>设置</Text>
          </View>
          <View>
            <Text>主题</Text>
          </View>
          <View>
            <Text>夜间</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    overflow: 'scroll'
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
    paddingTop: px2dp(106)
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
  user_name:{
    color: g_style.white,
    fontSize: px2dp(38),
    marginRight: px2dp(18)
  },
  user_lvl:{
    height: px2dp(40),
    marginRight: px2dp(18),
    paddingHorizontal: px2dp(8),
    textAlign: "center",
    color: g_style.white,
    fontSize: px2dp(22),
    fontWeight: '600',
    lineHeight: px2dp(40),
    borderWidth: px2dp(4),
    borderRadius: px2dp(6),
    borderColor: g_style.white,
  },
  user_status:{
    height: px2dp(43),
    paddingHorizontal: px2dp(11),
    textAlign: "center",
    color: g_style.mainColor,
    fontSize: px2dp(26),
    lineHeight: px2dp(43),
    borderWidth: px2dp(4),
    borderRadius: px2dp(6),
    borderColor: g_style.white,
    backgroundColor: "rgba(255,255,255,0.65)",
  },
  user_coin:{
    fontSize: px2dp(30),
    color: "rgba(255,255,255,0.65)",
    marginRight: px2dp(38),
    marginTop: px2dp(14)
  },
  
  user_about:{
    height: px2dp(162),
    borderBottomWidth:2,
    borderBottomColor: '#e7e7e7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  user_about_text_1: {
    fontSize: px2dp(40),
    textAlign: 'center'
  },
  user_about_text_2: {
    fontSize: px2dp(32),
    textAlign: 'center',
    color: g_style.black, 
    marginTop: px2dp(24)
  },

  content: {
    paddingTop: px2dp(26)
  },
  list:{
    height: px2dp(144),
    paddingLeft: px2dp(60),
    textAlignVertical: "center",
    borderBottomWidth:2,
    borderBottomColor: '#e7e7e7',
  },

  bottom:{
    height: px2dp(150),
    borderTopWidth:2,
    borderTopColor: '#e7e7e7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})